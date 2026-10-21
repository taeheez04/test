let now = new Date();
let before = new Date("June 29, 2004");

let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

console.log(`태어나고 ${interval}일 지났습니다.`);

let array = [{
    name: "새우튀김",
    price: 1000
}, {
    name: "수육",
    price: 5000
}, {
    name: "비빔밥",
    price: 3000
}];

let popped = array.pop()
console.log("- 배열에서 꺼낸 요소");
console.log(popped);
console.log("- pop() 메소드를 호출한 이후의 배열");
console.log(array);

array.push(popped);
array.push({
    name: "소고기",
    price: 50000
});
console.log("- push() 메소드를 호출한 이후의 배열")
console.log(array);