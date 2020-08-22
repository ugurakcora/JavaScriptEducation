// if else statements

const firstName = 'Uğur';
const age = 19;
const isStudent = true;
const school = 'university';

if (firstName == 'Uğur') {
  console.log('merhaba');
}

if (age === 19) {
  console.log('yaşınız 19');
}

if (isStudent == true) {
  console.log('merhaba Öğrenci');
} else[
  console.log('Öğrenci Değil')
]

if (age >= 18) {
  if ((school == 'university') || (school == 'high school')) {
    console.log('ehliyet alabilirsin');
  }
} else {
  console.log('ehliyet alamazsınız, eğitim durumunuz yeterli değil')
}

if (age > 0 && age < 12) {
  console.log(`${fistName} is a child`);
}
else if (age >= 13 && age <= 19) {
  console.log(`${firstName} is a teenager`);
}
else {
  console.log(`${firstName} is an adult`);
}

// undefined
let id = '132132';
if (typeof id !== 'undefined') {
  console.log('id' + id);
} else {
  console.log('no id');
}