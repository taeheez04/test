// throw 사용
try {
    throw "강제 예외";
} catch (exception) {
    console.log("예외가 발생했습니다.");
    console.log(exception);
}

// 예외 코드
function sum (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw "숫자를 입력하세요."
    }
    return x + y;
}

console.log(sum("abc", 1))