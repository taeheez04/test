const express = require("express");
const app = express();

app.get("/page/:id", (req, res) => {
    const id = req.params.id;
    res.send(`<h1>나의 학번은 ${id} 입니다.</h1>`);
});

app.listen(52273, () => {
    console.log("Server running at http://127.0.0.1:52273/page/20233053");
});
