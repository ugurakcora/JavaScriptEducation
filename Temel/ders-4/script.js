// loops

// for

for (let i = 0; i < 10; i++) {
  if (i == 3) {
    console.log("En sevdiğim rakam: " + i);
    continue;
  }

  if (i == 6) {
    console.log("En sevmediğim rakam: " + i);
    break;
  }
  console.log(i);
}

// while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do while
let a = 0;
do {
  console.log(a);
  a++;
} while (a < 10);

let toplam = 0;
for (i = 10; i > 10; i--) {
  console.log(i);
  toplam += i;
}
console.log(toplam);

let sonuc = 1;
for (i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    sonuc *= i;
  }
}
console.log(sonuc);

let val = "\n";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i : ${i} j : ${j}`);
    val += "* ";
  }
  val += "\n";
}
console.log(val);
