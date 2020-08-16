// uyg strings

var sentence = " Template Literals or template string is the ability Have multi-line strings without and funny bussines. ";
var url = "https://goggle.com tarayıcı";

// cümle kaç karakterli?
console.log(sentence.length);

// kaç kelime?
console.log(sentence.split(' '));

// tüm cümleyi küçük harfe çevir
console.log(sentence.toLowerCase());

// cümlenin başında ki ve sonunda ki boşlukları sil
console.log(sentence.trim());

//  - karakterini sil
console.log(sentence.replace('-', ''));

// url'in http kısmını çıkarın
console.log(url.substr('https'));

// url hangi protokolü kullanıyor
console.log(url.startsWith('https'));

// url .com ifadesi içeriyor mu?
console.log(url.indexOf('.com'));