class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    // 메서드 생성
    nextYearAge() {
        return Number(this.age) + 1;
    }
}

let kim = new Person("kim", "23", "changwon"); 
// 자료형 문자열이라 여기서 +1 한다고 계산 안됨
console.log(kim);

// 함수를 넣은 속성 생성
kim.eat = function() {
    return "apple";
}

console.log("김씨 내년에는 몇살이신가? " + kim.nextYearAge());
console.log("김씨가 먹은 건? " + kim.eat());

let park = new Person("park", "31", "Seoul");

console.log("박씨 내년에는 몇살인가? " + park.nextYearAge());
console.log("박씨가 먹은건? " + park.eat()); // 김에 대한 메소드이기에 출력 안됨