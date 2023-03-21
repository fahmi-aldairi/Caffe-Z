/////////// Task-1 //////////

// let visitor = prompt("Hello, Please enter your name :");
// let gender = prompt("Can you tell us your gender?");
// let lowerGender = gender.toLowerCase();

// if (lowerGender === "male") {
//   alert("Welcome" + " Mr." + visitor);
//   let drink = prompt("Do you prefer a hot or cold drink Mr. " + visitor + "?");
//   let nameDrink = prompt(
//     "Please, write the name of your drink Mr. " + visitor + "?"
//   );
//   let gettingPrepared = alert("Your drink is getting prepared Mr. " + visitor);
//   console.log(nameDrink + " for Mr." + visitor);
// } else if (lowerGender === "female") {
//   alert("Welcome Ms." + visitor);
//   let drink = prompt("Do you prefer a hot or cold drink Ms. " + visitor + "?");
//   let nameDrink = prompt(
//     "Please, write the name of your drink Ms. " + visitor + "?"
//   );
//   let gettingPrepared = alert("Your drink is getting prepared Ms. " + visitor);
//   console.log(nameDrink + " for Ms." + visitor);
// } else {
//   alert("Welcome " + visitor);
//   let drink = prompt("Do you prefer a hot or cold drink " + visitor + "?");
//   let nameDrink = prompt(
//     "Please, write the name of your drink " + visitor + "?"
//   );
//   let gettingPrepared = alert("Your drink is getting prepared " + visitor);
//   console.log(nameDrink + " for " + visitor);
// }

/////////// Task-2 //////////

// let visitor = prompt("Hello, Please enter your name :");
// let gender = prompt("Can you tell us your gender?");
// let lowerGender = gender.toLowerCase();
// let drink , nameDrink;

// while (lowerGender != "male" && lowerGender != "female") {
//   gender = prompt("Please, select a gender");
//   lowerGender = gender.toLowerCase();
// }

// if (lowerGender === "male") {
//   alert("Welcome" + " Mr." + visitor);
//   drink = prompt("Do you prefer a hot or cold drink Mr. " + visitor + "?");
//   nameDrink = prompt(
//     "Please, write the name of your drink Mr. " + visitor + "?"
//   );
//   let gettingPrepared = alert("Your drink is getting prepared Mr. " + visitor);
//   console.log(nameDrink + " for Mr." + visitor);
// } else if (lowerGender === "female") {
//   alert("Welcome Ms." + visitor);
//   drink = prompt("Do you prefer a hot or cold drink Ms. " + visitor + "?");
//   nameDrink = prompt(
//     "Please, write the name of your drink Ms. " + visitor + "?"
//   );
//   let gettingPrepared = alert("Your drink is getting prepared Ms. " + visitor);
//   console.log(nameDrink + " for Ms." + visitor);
// }


// let info = [visitor, gender, drink, nameDrink];
// for(let i=0; i<info.length; i++){

//   console.log(info[i]);
// }

/////////// Task-3 //////////

// let visitor = prompt("Hello,please type your name?");
// let drinkType, drinkName;
// let gender = prompt("Tell us your Gender!!").toLowerCase();

// function gen() {
//   while (gender != "male" && gender != "female") {
//     gender = prompt("Type your gender correctly,please.");
//   }
//   if (gender === "male") {
//     alert("Welcome" + " Mr." + visitor);
//     drinkType = prompt(
//       "Do you prefer a hot or cold drink Mr. " + visitor + "?"
//     );
//     drinkName = prompt(
//       "Please, write the name of your drink Mr. " + visitor + "?"
//     );
//     alert("Your drink is getting prepared Mr. " + visitor);
//   } else if (gender === "female") {
//     alert("Welcome" + " Ms." + visitor);
//     drinkType = prompt(
//       "Do you prefer a hot or cold drink Ms. " + visitor + "?"
//     );
//     drinkName = prompt(
//       "Please, write the name of your drink Ms. " + visitor + "?"
//     );
//     alert("Your drink is getting prepared Ms. " + visitor);
//   }
// }

// let gn = gen();

// let info = [visitor, gender, drinkType, drinkName];

// for (let i = 0; i < info.length; i++) {
//   console.log(info[i]);
// }

/////////// Task-4 //////////

let visitor = prompt("Hello, Please enter your name :");
let gender = prompt("Can you tell us your gender?");
let lowerGender = gender.toLowerCase();
function gen() {
  while (lowerGender != "male" && lowerGender != "female") {
    gender = prompt("Please, select a gender");
    lowerGender = gender.toLowerCase();
  }

  if (lowerGender === "male") {
    alert("Welcome" + " Mr." + visitor);
  } else if (lowerGender === "female") {
    alert("Welcome Ms." + visitor);
  }
}
let gn = gen();

let drink = prompt("Do you prefer a hot or cold drink " + visitor + "?");
let nameDrink = prompt("Please, write the name of your drink " + visitor + "?");
let gettingPrepared = alert("Your drink is getting prepared " + visitor);
let info = [visitor, gender, drink, nameDrink];
for (let i = 0; i < info.length; i++) {
  console.log(info[i]);
}
let visitorInfo = document.getElementById("Visitor_Info");
let div = document.createElement("div");
let p = document.createElement("p");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

p.textContent = `${"Name :"} ${visitor}`;
li1.textContent = `${"Gender :"} ${gender}`;
li2.textContent = `${"Drink:"} ${drink}`;
li3.textContent = `${"Drink type:"} ${nameDrink}`;

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

div.appendChild(p);
div.appendChild(ul);

visitorInfo.appendChild(div);