let visitor = prompt("Hello, Please enter your name :");
let gender = prompt("Can you tell us your gender?");
let lowerGender = gender.toLowerCase();


if (lowerGender === "male") {
  alert("Welcome" + " Mr." + visitor);
  let drink = prompt("Do you prefer a hot or cold drink Mr. " + visitor + "?");
  let nameDrink = prompt(
    "Please, write the name of your drink Mr. " + visitor + "?"
  );
  let gettingPrepared = alert("Your drink is getting prepared Mr. " + visitor);
  console.log(nameDrink + " for Mr." + visitor);
} else if (lowerGender === "female") {
  alert("Welcome Ms." + visitor);
  let drink = prompt("Do you prefer a hot or cold drink Ms. " + visitor + "?");
  let nameDrink = prompt(
    "Please, write the name of your drink Ms. " + visitor + "?"
  );
  let gettingPrepared = alert("Your drink is getting prepared Ms. " + visitor);
  console.log(nameDrink + " for Ms." + visitor);
} else {
  alert("Welcome " + visitor);
  let drink = prompt("Do you prefer a hot or cold drink " + visitor + "?");
  let nameDrink = prompt(
    "Please, write the name of your drink " + visitor + "?"
  );
  let gettingPrepared = alert("Your drink is getting prepared " + visitor);
  console.log(nameDrink + " for " + visitor);
}
