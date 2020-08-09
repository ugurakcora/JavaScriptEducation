// operatörler


let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;



//  1 - Aritmatik Opeatörler

val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = d++;  //sonradan yapar
val = ++d;
val = d--;  //sonradan yapar
val = --d;

//  2 - Atama Operatörleri

val = a;
val += a;
val -= a;
val *= a;
val /= a;
val %= a;

//  3 - Karşılaştırma Operatörleri

val = a == b;
val = b == c;
val = a === b; //değer ve tip kontrolü
val = b === c;
val = a != b;
val = a !== b;
val = a < b;
val = a > b;
val = a <= b;
val = a <= b;

//  4 - Mantıksal Operatörler
  
   // && (And) iki değerde true olmalı
  
  (a>b)&&(a>c)

  
   // || (Or) iki değerden en az biri true olmalı

   (a>b)||(a>c) 

   // ! (Not)


console.log(val);
console.log(typeof val);
