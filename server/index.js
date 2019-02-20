const express = require("express");
const app = express();
const keys = require('./config/key');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PostController = require('./controllers/PostController');

mongoose.connect(keys.mongodburi);

app.use(bodyParser.json({
    limit: keys.bodyLimit
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req,res,next) {
    if (req.headers.origin === 'https://simplegone.com' || req.headers.origin === 'https://www.simplegone.com'){
        res.header('Access-Control-Allow-Origin',req.headers.origin);
        res.header('Access-Control-Allow-Methods',"GET,PUT,POST,DELETE");
        res.header('Access-Control-Allow-Headers',"Content-type");
    }
    next();
});

app.get('/', (req,res) => {
    return res.json({success: true, message: "Hello World!", exit:0});
});

app.get('/heartbeat', (req,res) => {
    return res.json({success: true, message: "Beating!", exit:0});
});

app.get('/wow', (req,res) => {
    return res.json({success: true, message: "WOW!", exit:0});
});

app.get('/api/post/heartbeat', (req, res) => {
    res.json({success: true, message: 'Beep!'});
});

app.use('/api/post/', PostController);

const PORT = process.env.PORT | 5000;
app.listen(PORT);