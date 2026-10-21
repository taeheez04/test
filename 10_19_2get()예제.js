const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // req = request, res = response
    res.send("Hello express");
});

app.get("/about", (req, res) => {
    res.send("This is the About page.");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});