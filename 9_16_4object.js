var sayNode = function () {
    console.log("Node");
};
var es = "ES"
var oldobject = {
    sayJS: function(){
        console.log("JS");
    },
    sayNode: sayNode,
};
oldobject[es + 6] = "20233053";
oldobject.sayNode();
oldobject.sayJS();
console.log(oldobject.ES6);

const newObject = {
    sayJS() {
        console.log("JS");
    },
    sayNode,
    [es + 6]: "20233053",
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6)