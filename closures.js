// closure --> function along with its lexical environment

function outer(){
    const name = "bob";

    function inner(){
        console.log("hello, "+ name);
    }
    inner();
}

const greeting = outer();
