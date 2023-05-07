const object = {
    num: 10,
    str: "string",
    obj:{
        x: 1,
        y: 2
    }
};

console.log(object.obj.x);
console.log(object["obj"]["y"]);
