//  demo : arrays

// dizi oluştur

let cars = ['bmw', 'mercedes', 'opel', 'mazda'];

// dizi kaç elemanlıdır
console.log(cars.length);

// dizinin ilk ve son elemanı
console.log(cars[0]);
console.log(cars[cars.length - 1]);

// diziye eleman ekle
cars[4] = 'renault';
cars[cars.length] = 'renault';
cars[cars.length] = 'fiat';

// dizinin sonuna eleman ekle
cars.push('toyota');

// dizinin başına eleman ekle
cars.unshift('seat');

// değer sil
cars.pop('toyota');
cars.shift('seat');

// ter çevir
cars.reverse();

// alfabetik
cars.short();

// [1,2,5,80] dizisini sıralayın
var numbers = [1, 2, 5, 80, 15];
console.log(numbers.sort());
function compare(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

// opel değeri dizinin bir elemanı mıdır?
console.log(cars.indexOf('opel'));
console.log(cars.includes('opel'));

// var str = "Chevrolet, Dacia"; ifadesini diziye çevir;
var str = "Chevrolet, Dacia";
var cars2 = str.split(',');
console.log(cars2);

// dizileri birleştir
var cars3 = cars.concat(cars2);
console.log(cars3);

// son iki elemanı sil
console.log(cars3.pop());
console.log(cars3.pop());

console.log(cars3.splice(6, 2));

console.log(cars3.slice(6, 8));

// aşağıda verilen elemanları bir dizi içerisinde saklayınız.
// studentA : yiğit ballı 2010
// studentB : Uğur Akçora 1997
// studentC : Deniz Akçora 1998

let studentA = ['Yiğit', 'Ballı', 2010];
let studentB = ['Uğur', 'Akçora', 1997];
let studentC = ['Deniz', 'Akçora', 1998];

let students = [studentA, studentB, studentC];
console.log(students);
console.log(students[0]);
console.log(students[1][1]);
