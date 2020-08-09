// bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz
// müşteri adı
// müşteri soyadı
// müşteri tc kimlik
// müşteri sipariş toplamı
// müşteri cinsiyet
// müşteri adres bilgisi
// müşteri hobiler

let musteriAdi = 'Uğur';
let musteriSoyad = 'Akçora';
const musteriTC = '12345678911';
let total = 206.5;
// true = erkek / false = kadın
let cinsiyet = 'true';
let adres = {
  City: 'İstanbul',
  Country: 'Türkiye',
  Body: 'Mecidiye Mahallesi'
}

let hobi = ['Sinema', 'Kitap', 'Spor'];


// aşağıdaki siparişlerin toplamını hesaplayınız

// soru hali
// var order1 = '100';
// var order2 = '150';

let order1 = Number('100');
let order2 = Number('150');
let totalOrder= order1+order2;
console.log(totalOrder);



// aşağıdaki siparişlerin toplamını hesaplayınız

// soru hali
// var order3 = '100.2';
// var order4 = '150.5';

let order3 = Number('100.2');
let order4 = Number('150.5');
let totalOrder= order3+order4;
console.log(totalOrder);


// aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız
let order5 = parseInt('100.2');
let order6 = parseInt('150.5');
let totalOrder= order5+order6;
console.log(totalOrder);


// aşağıda verilen doğum yılına göre yaş hesaplama

const YearOfBirth = 1997;
console.log(new Date().getFullYear()-YearOfBirth);


// aşağıdakilerden hangisi karakter sayı uzunluğunnu verir

let course = 'Modern JavaScript Kursu';
console.log(course.length);