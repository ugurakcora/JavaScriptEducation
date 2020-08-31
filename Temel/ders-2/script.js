// switch case

let category = "telefon";

switch (category) {
  case "telefon":
    console.log("telefon kategorisi");
    break;

  case "bilgisayar":
    console.log("bilgisayar  teknolojisi");
    break;

  default:
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Pazar";
    break;

  case 1:
    day = "Pazartesi";
    break;

  case 2:
    day = "Salı";
    break;

  case 3:
    day = "Çarşamba";
    break;

  case 4:
    day = "Perşembe";
    break;

  case 5:
    day = "Cuma";
    break;

  case 6:
    day = "Cumatesi";
    break;

  default:
    break;

  case 0:
  case 6:
    day = "haftasonu";
    break;

  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    day = "haftaiçi";
    break;
}

console.log(`Bugün günlerden ${day}`);

const age = 19;

switch (true) {
  case age > 0 && age < 12:
    console.log("çocuk");
    break;

  case age >= 13 && age <= 19:
    console.log("ergen");
    break;
    
  default:
    break;
}
