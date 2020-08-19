// array

let names = ['Uğur', 'Enes', 'Ada'];
let years = [1997, 1999, 2010];
let mix = ['Uğur', 'akçora', '1997', null, undefined, ['sinema', 'kitap okuma']];

// get array item
console.log(names[0]);

// /set array item
names[0] = 'ugur';
names[4] = 'test';
names[name.length] = 'test1';

// add item
// sona atar
years.push(2021);
// başa atar
years.unshift(2022);


// remove item
// son elemanı siler
years.pop();
// ilk elemanı siler
years.shift();

// indexof
let index = names.indexOf('Ada');
console.log(index);

// reverse
names.reverse();

// sort
years.sort();

// concat
let val = years.concat(names);
console.log(val);

// splice
// hangi elemandan başlayacak/hangisini silecek/ne ekleyecek
names.splice(2, 0, 'seda');

// find
// bulduğu ilk değeri getirir
function over18(year) {
  let age = 2018 - year;
  return age >= 18;
}
console.log(over18(1990));

let val = years.find(over18);
console.log(val);

// filter
// birden fazla değer bulmak için
let val = years.filter(over18);
console.log(val);


console.log(names.length);
console.log(names);
console.log(typeof names);
console.log(years);
console.log(mix);