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

