// 여기부터는 보강으로~~
// 리다이렉트 post 300...

const express = require("express");
const app = express();

app.get("*", (req, res) => {
    res.redirect("https://ecampus.changwon.ac.kr/login.php");
    console.log(res.statusCode);
});

app.listen(52273, () => {
    console.log("Server running at http://127.0.0.1:52273");
});

// 출력값으로 나온 주소클릭