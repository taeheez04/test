const person = {
    name : "김태희",
    age : 23,
    languages: ["Korean", "English"]
};

console.log(person.name);
console.log(person.age);
console.log(person.languages);

// 속성 변경S
person.name = "신하경"
person.age = 20;

// 속성 추가
person.address = "경상남도 창원시 의창구";

console.log(person)

// 속성 삭제
delete person.address;
console.log(person)

// 속성 유무 확인
console.log("name" in person);
console.log("phoneNumber" in person);