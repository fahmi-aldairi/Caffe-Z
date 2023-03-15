

let visitor = prompt("Please enter your name:");
let gender = prompt("what is your gender?");
let lowerGender = gender.toLocaleLowerCase();

if(lowerGender === "male"){
    alert("Welcome Mr."+visitor);
}
else if( lowerGender === "female"){
    alert("Welcome Ms."+visitor);
}
else{
    alert("Welcome "+visitor);
}