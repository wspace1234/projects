const person1 = "sofia naz";

// ## A function returns function with greeting and message set and function takes a name parameter

function greet(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`);
    }
}

const greetAsk = greet("Hello", "would you like to earn money online");
greetAsk(person);



const person2 = " \t Raza-ur-rehman \n ";
console.log(person)
/*
  ## Trimed whitespaces using trim method
*/
console.log(person.trim())