const person = "sofia naz";

function greet(greeting, message){
    return function(name){
        console.log(`${greeting} ${name}, ${message}`)
    }
}
const greetAsk = greet("Hello", "would you like to earn money online");
greetAsk(person.toLowerCase())
greetAsk(person.toUpperCase())

const titleCaseName = person.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
greetAsk(titleCaseName)