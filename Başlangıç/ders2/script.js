// değişkenler

var age;
console.log(age);

age = 20;
console.log(age);

var fullname = "Uğur Akçora";
console.log(fullname);

var fullname = "Enes Akçora";
console.log(fullname);


// değişken tanımlama kuralları
/*
1-) sayı ile başlamaz
2-) komut isimleriyle yapılmaz örneğin; switch, for
*/


// var, let const

// değiştirilir
let city = "Ardahan";
console.log(city);


// değişmez
const email = "u@gmail.com";
console.log(email);


// değişken türleri
  // Primit Types
    // string
      let ad = "uğur";
      console.log(typeof ad);

    // number
      let yas = 20;
      console.log(typeof age);

    // boolean / koşul durumunda kullanılır
      let isActive = true;
      console.log(typeof isActive);
          
    // null
      let job = null;
      console.log(typeof job);

    // undefined
      let car;
      console.log(typeof car);



  // Reference Types / Objects

    // array
      let names=['Uğur','Enes', 'Deniz'];
      console.log(typeof names);

      let adress= {
        City: 'İstanbul',
        Country: 'Türkiye'
      }
      console.log(typeof adress);


    // fonksiyon 
      var calc = function(){
        return 0;
      }
      console.log(typeof calc);


// Tür dönüşümü
  
  let num1='5';
  console.log(typeof num1); 

  let num2='7';
  console.log(typeof num1); 

  console.log(num1+num2);



  let num2=Number('5');
  console.log(typeof num2); 

  let num3=Number('7');
  console.log(typeof num3); 

  console.log(num2+num3);