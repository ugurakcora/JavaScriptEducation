// 
let val;
// val = Number ('10');
// val = parseInt ('10');
// val = parseFloat ('10.5');

// val = parseInt('10a');
// string başta olursa döndürmez ama sonda olursa inte döndürür

// true false değer döner
val = isNaN('a10');


var num = 10.123456789;
val = num.toPrecision(5);
val = num.toFixed(2);

// pi sayısı
val = Math.PI;

// yuvarlama
val = Math.round(2.7);

// yukarı yuvarlama
val = Math(2.4);

// aşağı yuvarlama
val = Math.floor(2.7);

// karekök
val = Math.sqrt(64);

// üslü sayılar
val = Math.pow(2, 3);

// en küçük sayıyı bulmaz
val = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9);

// en yüksek sayıyı bulmaz
val = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9);

// random sayı üretme
val = Math.random() * 10;



console.log(val);
console.log(typeof val);