class Ticket {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    getPrice() {
        if (this.age <= 13) return 5000;    
        else if (this.age < 20) return 8000;
        else return 12000;
    }
}

let person1 = new Ticket("철수", 10);
let person2 = new Ticket("영희", 15);
let person3 = new Ticket("민수", 20);

console.log(`${person1.name}의 티켓 가격: ${person1.getPrice()}원`);
console.log(`${person2.name}의 티켓 가격: ${person2.getPrice()}원`);
console.log(`${person3.name}의 티켓 가격: ${person3.getPrice()}원`);