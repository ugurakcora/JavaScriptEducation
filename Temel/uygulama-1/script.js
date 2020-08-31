let trafigeCikis = new Date("04/20/2016");
trafigeCikis.setHours(0, 0, 0, 0);
var trafikteMs = Date.now() - trafigeCikis.getTime();
var trafikteGun = Math.floor(trafikteMs / (1000 * 60 * 60 * 24));

console.log(trafikteGun);

// if else
if (trafikteGun <= 365) {
  console.log("1. servis bakım süreniz geldi");
} else if (trafikteGun > 365 && trafikteGun <= 365 * 2) {
  console.log("2. servis bakım süreniz geldi");
} else if (trafikteGun > 365 * 2 && trafikteGun <= 365 * 3) {
  console.log("3. servis bakım süreniz geldi");
} else if (trafikteGun > 365 * 3 && trafikteGun <= 365 * 4) {
  console.log("4. servis bakım süreniz geldi");
} else if (trafikteGun > 365 * 4 && trafikteGun <= 365 * 5) {
  console.log("5. servis bakım süreniz geldi");
} else {
  console.log("bilinmeyen bir süre");
}


// examples 2
var result = prompt("who is where?");

if (result == "cancel") {
  console.log("Canceled");
} else if (result == "admin") {
  console.log("welcome Admin");

  var password = prompt("enter your password");

  if (password == "cancel") {
    console.log("Canceled");
  } else if (password == "1234") {
    console.log("welcome Admin2");
  } else {
    console.log("wrong password");
  }
} else {
  console.log("I don't know");
}
