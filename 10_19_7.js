//10-7
const express = require("express");
const app = express();

app.get("*", (req, res) => {
    console.log(req.query);
    res.send(req.query);    
});

app.listen(52273, () => {
    console.log("Server running at http://127.0.0.1:52273/?이름=김태희&학번=20233053");
});