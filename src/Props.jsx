//Destructuring

const person ={
    name: "Chris",
    age: 30,
    gender: "male"
}


const {name, age, gender} = person;

function greet({name, age, gender}){
    return `Hello ${name}, you are ${age} years old and your gender is ${gender}.`;
}

greet(person);

// object spreading or the spread operator is a feature in JavaScript that allows you to create a new object
//  by copying the properties of an existing object. It is denoted by three dots (...) followed by the name of 
//  the object you want to spread.

