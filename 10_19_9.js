//10-9
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    let output = "";
    // post는 입력한 값을 숨기고
    // get은 주소값에 다 보여줌
    output += "<form method='post'> ";
    // output += "<form method='get'> ";
    output += "     <input type='text' name='a' />";
    output += "     <input type='text' name='b' />";
    output += "     <input type='submit' />";
    output += "</form> ";
    res.send(output);    
});

app.post("/", (req,res) => {
    res.send(req.body);
});

app.listen(52273, () => {
    console.log("Server running at http://127.0.0.1:52273");
});