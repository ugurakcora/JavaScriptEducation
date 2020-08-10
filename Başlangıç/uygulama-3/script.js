// şimdiki tarihin gün ay ve yıl bilgisini yazınız
let nd = new Date();

console.log(nd);
console.log(nd.getMonth() + 1);
console.log(nd.getDate());
console.log(nd.getFullYear());

// Tarih ve saat bilgisi içeren bir date objesi oluşturun

let dtA = new Date('08/10/2020');
console.log(dtA);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz.
let bd = new Date('1/1/1990');
console.log(bd);
let DayOfMounth = bd.getDate();
bd.setDate(DayOfMounth - 1);

// iki tarih arasında geçen süre
let start = new Date('1/1/1990');
let end = new Date('1/1/1991');

// ms
let milisaniye = end - start;
console.log("miliSaniye " + milisaniye);

// sn
let saniye = milisaniye / 1000;
console.log('Saniye ' + saniye);

// dk
let min = saniye / 60;
console.log('dakika ' + min);

// saat
let saat = min / 60;
console.log('saat ' + saat);

// gun
let gun = saat / 24;
console.log('gun ' + gun);


// yaş hesaplama

let birthday = new Date('01/13/1997');
let yasFarkı=Date.now()-birthday.getTime();
console.log(birthday.getTime());
console.log(yasFarkı());
