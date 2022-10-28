const person = "M Adeel Chaudhary";

function greet(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`)
    }
}