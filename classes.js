class person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    
    greet(){
        console.log("Hello, "+this.name);
    }
}

const obj = new person("Timm", 23);
obj.greet();
