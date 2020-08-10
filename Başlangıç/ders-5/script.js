// date object

let d = new Date();
let birthday = new Date(1997,01,13);



// set Methods
d.setFullYear(2022);
d.setMonth(5);
d.setDate(20);
d.setHours(15);
d.setMinutes(55);


// 
console.log(d);
console.log(typeof d);



// get methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes);
console.log(d.getSeconds());

console.log(d.getFullYear()-birthday.getFullYear());

