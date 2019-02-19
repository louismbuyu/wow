const express = require("express");
const app = express();

app.get('/', (req,res) => {
    return res.json({success: true, message: "Hello World!", exit:0});
});

app.get('/heartbeat', (req,res) => {
    return res.json({success: true, message: "Beating!", exit:0});
});

app.get('/wow', (req,res) => {
    return res.json({success: true, message: "WOW!", exit:0});
});

app.get('/api/wow', (req,res) => {
    return res.json({success: true, message: "WOW!", exit:0});
});

const PORT = process.env.PORT | 5000;
app.listen(PORT);