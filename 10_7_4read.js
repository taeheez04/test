// 파일을 읽고 출력
const fs = require("fs");

const file = fs.readFileSync(__dirname+"/10_7_4textfile.txt");
// const file = fs.readFileSync(__dirname+"/10_7_4textfile.txt", {encoding: "utf8", flag: "r"});
console.log(file);
console.log(file.toString());