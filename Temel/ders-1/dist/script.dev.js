"use strict";

// if else statements
var firstName = 'Uğur';
var age = 19;
var isStudent = true;
var school = 'university';

if (firstName == 'Uğur') {
  console.log('merhaba');
}

if (age === 19) {
  console.log('yaşınız 19');
}

if (isStudent == true) {
  console.log('merhaba Öğrenci');
} else [console.log('Öğrenci Değil')];

if (age >= 18) {
  if (school == 'university' || school == 'high school') {
    console.log('ehliyet alabilirsin');
  }
} else {
  console.log('ehliyet alamazsınız, eğitim durumunuz yeterli değil');
}