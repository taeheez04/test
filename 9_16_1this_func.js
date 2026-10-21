const obj = {
    value: 3053,
    regularFunc: function () {
        console.log(this.value);
    } 
};

obj.regularFunc();

const obj1 = {
    value: 3053,
    arrowFunc: () => {
        console.log(this.value);
    }
};
obj1.arrowFunc();