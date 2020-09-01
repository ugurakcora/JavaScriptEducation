// object literals

// let firstName = "uğur";
// let lastName = "akçora";

// let firstName1 = "ece";
// let lastName1 = "doğan";

// let cinar = ["Cınar", "usanmaz", 1];
// let sena = ["Sena", "kaya", 19];

// bunların ikisi de çok kullanışlı değil

let person = {
  firstName: "Uğur",
  lastName: "Akçora",
  age: 23,
  hobbies: ["music", "game"],

  address: {
    city: "Istanbul",
    country: "Turkey",
  },

  getBirthYear: function () {
    return 2020 - this.age;
  },
};

console.log(person);
console.log(person.firstName);
console.log(person.hobbies[0]);
console.log(person.hobbies.length);
console.log(person.address);
console.log(person.address.city);
console.log(person.getBirthYear());
console.log(typeof person);

let people = [
  { firstName: "Uğur", lastName: "Akçora" },
  { firstName: "Ece", lastName: "Doğan" },
];

console.log(people[1].firstName);

for (let i = 0; i < people.length; i++) {
  console.log(people[i].firstName);
}
