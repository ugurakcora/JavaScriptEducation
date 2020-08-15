const fName = 'Uğur';
const lName = "Akçora";
const age = 23;
let hobi = 'sinema,şiir,kitap';
let val;


// string concat (birleştirme)
val = fName + ' ' + lName;
val = 'Sadık';
val += 'Akçora';
val = 'Benim adım: ' + fName + ' ' + lName + ' ve yaşım ' + age + " İstanbul'da yaşıyorum";


// String length
val = val.length;

// string uppercase - lowercase
val = val.toUpperCase();
val = val.toLowerCase();

// harf alma
val = val[0];

// index numarasını bulma
val = val.indexOf('Akçora');

// string içerisinden bölüm çıkarma Substring
val = val.substring(0, 5);
val = val.slice();

// string replace değiştime
val = val.replace('Sadık', 'Uğur');

// ayırma split
val = hobi.split(',');
console.log(val);
console.log(typeof val);