class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
}

let myCar = new Car ("Tesla", "Model 3")
console.log("초기 객체:", myCar);

// 속성 추가 다른 방법
myCar.year = 2025;
myCar["color"] = "Red";
console.log("속성 추가 후:", myCar);

delete myCar.year;
delete myCar["color"];
console.log("속성 제거 후:", myCar);