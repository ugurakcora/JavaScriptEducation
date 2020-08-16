// template literals

const fName = 'Uğur';
const city = 'İstanbul';
const yearOfBirth = 1997;
let val;


// normalde
val = "my name is " + fName + " I'm " + (2020 - yearOfBirth) + ' years old and I live in ' + city;

// template hali
val = `my name is ${fName} I'm ${2020 - yearOfBirth} years old and I live in ${city}`;



console.log(val);