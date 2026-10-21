const obj = {
    name: "ChatGPT",
    outer: function() {
        console.log("outer this:", this.name);

        const inner = () => {
            console.log("inner this:", this.name);
        };
        inner();
    }
};

obj.outer();