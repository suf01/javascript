//functions

// method - 1
function addnums(x, y){
    return x+y;
}

// method - 2 arrow functions
const findavg = (x, y)=>{
    return Math.round((x+y)/2);
}

const disp = ()=>{
    console.log("helllloooo ");
}

disp();
console.log("function returns", addnums(10, 20));
console.log("avg is ", findavg(5, 10));
