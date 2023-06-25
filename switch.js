//check what month do we have
//January = 1;
//February = 2;

const month = 10;
//what month is this ? Print it to the console as a word!

if (month === 1) {
  console.log("It`s January");
} else if (month === 2) {
  console.log("It`s February");
} else if (month === 3) {
  console.log("Its March");
} else if (month === 4) {
  console.log("It`s April");
} else if (month === 5) {
  console.log("It`s May");
} else if (month === 6) {
  console.log("It`s June");
} else if (month === 7) {
  console.log("It`s July");
} else if (month === 8) {
  console.log("It`s August");
} else if (month === 9) {
  console.log("It`s September");
} else if (month === 10) {
  console.log("It`s October");
} else if (month === 11) {
  console.log("It`s November");
} else if (month === 12) {
  console.log("It`s December");
} else {
  console.log("Error Message!");
}

console.log("-----------------------");

//SWITCH CASE

const grade = "C";
switch (grade) {
  case "A":
    console.log("You got an A");
    break;
  case "B":
    console.log("You got an B");
    break;
  case "C":
    console.log("You got an C");
    break;
  case "D":
    console.log("You got an D");
    break;

  default:
    console.log("Not a valid grade");
}

console.log("-----------------------");

const month1 = 4;
switch (month1) {
  case 1:
    console.log("Its January");
    break;
  case 2:
    console.log("Its February");
    break;
  case 3:
    console.log("Its March");
    break;
  case 4:
    console.log("Its April");
    break;
  case 5:
    console.log("Its May");
    break;
  case 6:
    console.log("Its June");
    break;
  case 7:
    console.log("Its July");
    break;
  case 8:
    console.log("Its August");
    break;
  case 9:
    console.log("Its September");
    break;
  case 10:
    console.log("Its October");
    break;
  case 11:
    console.log("Its November");
    break;
  case 12:
    console.log("Its December");
    break;
  default:
    console.log("Not a valid month");
}
console.log("-----------------------");

const myMonth = "January";
switch(myMonth){
    case "January":
    case "February":
        if(myMonth === "January"){
            const message = "Hello Winter";
            console.log(message);
        }
        console.log("This is the first or second month of the year.");
        break;

        case "March":
            console.log("This is the third month of the year.");
            break;

    default:
        console.log("Error");
}