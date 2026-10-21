// 예외 강제 발생
function sum (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error ("숫자를 입력하세요.");
    }
    return x + y;
}

console.log(sum("abc", 1))

function sum (x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error ("숫자를 입력하세요.");
    }
    return x + y;
}

try{
    console.log(sum("abc", 1));
} catch (e) {
    console.log(e.message)
    console.log(e)
}