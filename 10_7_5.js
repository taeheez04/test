// 콜백함수 사용 (내부적으로는 4와 다르다)
const fs = require("fs");

fs.readFile(__dirname+"/10_7_4textfile.txt", (error, file) => {
    console.log(file);
    console.log(file.toString());
});