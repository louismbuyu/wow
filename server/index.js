const express = require("express");
const app = express();

app.get('/', (req,res) => {
    return res.json({success: true, message: "Hello World!", exit:1});
});

app.get('/heartbeat', (req,res) => {
    return res.json({success: true, message: "Beating!", exit:1});
});

app.get('/wow', (req,res) => {
    return res.json({success: true, message: "WOW!", exit:1});
});

const PORT = process.env.PORT | 5000;
app.listen(PORT);