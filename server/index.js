const express = require("express");
const app = express();

app.get('/', (req,res) => {
    return res.json({success: true, message: "Hello World!"});
});

app.get('/heartbeat', (req,res) => {
    return res.json({success: true, message: "Beating!"});
});

app.get('/wow', (req,res) => {
    return res.json({success: true, message: "WOW!"});
});

const PORT = process.env.PORT | 5000;
app.listen(PORT);