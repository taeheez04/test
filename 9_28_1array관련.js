let arrayA = [40, 121, 21, 10, 33, 1];
// 문자열 형태로 정렬하게 됨

arrayA.sort();
console.log("-문자열로 정렬: ");
console.log(arrayA);
console.log("-문자열로 정렬(역순): ");
console.log(arrayA.reverse());
console.log();

arrayA.sort((itemA, itemB) => itemA - itemB); // 간단하게 표현
console.log(arrayA, "\n");

arrayA.sort(function(itemA, itemB){
    return itemA - itemB; // 양수면 정렬, 음수면 역순
});
console.log("-함수로 정렬");
console.log(arrayA);
arrayA.sort(function(itemA, itemB){
    return itemB - itemA;
});
console.log("-함수로 정렬(역순)");
console.log(arrayA);