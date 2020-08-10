// Demo : Operators

//  1 - Can ve Ada'nın boy ve kilo bilgilerini alın
//  2 - Alınan bilgilere göre boy/kilo endesksini hesaplayın
//  **  Formül : Kişinin kilosu / boy uzunluğunun karesi
//  3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız
//  4 - Ağaşıda ki tabloya göre can ve ada hangi gruba giriyor.

//  0 - 18,4: Zayıf
//  18,5 - 24,9 : Normal
//  25,0 - 29.9 : Fazla kilolu
//  30,0 - 34,9 : Şişman (Obez)

const CanKilo = 84;
const CanBoy = 1.84;

const AdaKilo = 45;
const AdaBoy = 1.70;

let CanHesap;
let AdaHesap;


CanHesap = CanKilo / (CanBoy * CanBoy);
console.log(CanHesap.toFixed(1));

AdaHesap = AdaKilo / (AdaBoy * AdaBoy);
console.log(AdaHesap.toFixed(1));

let adaBuyuk = AdaHesap > CanHesap;
console.log("Adanın indexi büyük " + adaBuyuk);

let canBuyuk = CanHesap > AdaHesap;
console.log("Canın indexi büyük " + canBuyuk);

let AdaPosition = (AdaHesap > 0) && (AdaHesap <= 18.4);
console.log("Zayıf "+AdaPosition);

let CanPosition = (CanHesap > 18.5) && (CanHesap <= 24.9);
console.log("Normal "+CanPosition);