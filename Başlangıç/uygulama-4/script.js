let num = 15.123456789;

// toplamda 3 basamaklı sayı bulun
console.log(num.toPrecision(2));

// ondalık kısmı 3 basamakla sınırla
val = num.toFixed(3);
console.log(val);

// en yakın sayıya yuvarla
console.log(Math.round(num));

// aşağı yuvarla
console.log(Math.floor(num));

// yukarı yuvarla
console.log(Math.ceil(num));

// en büyük ve en küçük değeri bulma
console.log(Math.min(1, 2, 10, 56, 20));
console.log(Math.max(1, 2, 10, 56, 20));

// sayı aralıığını kullanıcı belirteceği random sayı üretme
var min = 50;
var max = 100;
console.log(min + Math.random() * (max - min));

// bir personelin mesaiye göre aldığı maaşı hesaplama
// brüt maaş : 3700tl
// brüt mesai : 10.3 tl
// ağustos ayı mesai toplamı 42 saat ise toplam brüt maaşı nedir?
// brüt maaş üzerinden toplam kesinti orası %25 ise alınacak toplam net maaş nedir?

let bMaas = 3700;
let mUcreti = 10.3;
let mSuresi = 42;

let toplamBMaas = bMaas + mUcreti * mSuresi;
console.log(toplamBMaas);

let NetMaas = toplamBMaas - toplamBMaas * 0.25;
console.log(NetMaas.toFixed(2));