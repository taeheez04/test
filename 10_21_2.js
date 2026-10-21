const express = require("express");
const morgan = require("morgan");
const bodyParse = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(morgan("combined"));
app.use(bodyParse.urlencoded({extended: false}));

app.get("/", (req, res) => {
    let output = "";
    output += "<form method='post'>";
    output += "    <input type='text' name='title' />";
    output += "    <input type='text' name='prof' />";
    output += "    <input type='submit' />";
    output += "</form>"
    res.send(output);
});

const courses = [
    { id: 1, title: "JavaScript", prof: "김병욱"},
    { id: 2, title: "Java", prof: "박동규"},
    { id: 3, title: "Probability", prof: "이훈"},
];
app.post("/", (req, res) =>{
    const course = {
        id: courses.length + 1,
        title: req.body.title,
        prof: req.body.prof
    };
    courses.push(course);
    res.send(courses);
    console.log(req.body);
});

app.listen(52273, () => {
    console.log("Server rinning at http://127.0.0.1:52273");
});