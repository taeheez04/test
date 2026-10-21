const express = require("express");
const app = express();

const courses = [
    { id: 1, title: "JavaScript", prof: "김병욱"},
    { id: 2, title: "Java", prof: "박동규"},
    { id: 3, title: "Probability", prof: "이훈"},
];

app.get("/", (req, res) => {
    res.send("Hello TAEHEE");
});

app.get("/courses", (req, res) =>{
    res.send(courses);
});

app.get("/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course)
        res.status(404).send("The course with the given ID was not found");
    res.send(course);
});

app.listen(52273, () => {
    console.log("Server rinning at http://127.0.0.1:52273");
});