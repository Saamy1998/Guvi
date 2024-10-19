console.log("Welcome to home");
//alert
//used to give msg to the user and blocks the next line
alert("Are you approving?");
console.log("you are approved");
//prompt
//used to get message as string from user and block the next line
let name = prompt("Whats your name?","name");
console.log("Welcome", name);
//confirm 
//used to get message as boolean from user and block the next line
let flag = confirm("Are you willing to buy the course"); 
if (flag == true) 
    {
        console.log("Thanks for buying the course"); 
    }
    else
    {
        console.log("We regret to loose you."); 
    }

//var is global scoped
var a = 5
console.log(a); 
var a = 10 //can re declare
console.log(a);
a = 27; //can re initiate 30 console.log(a);

//let and const are block scoped 
let b = 15;
console.log(b);
// let b = 20; //not possible to redeclare
b = 28 // re initialization is possible 
console.log(b)

const c = 25;
// const c = 15 //not possible to redeclare
// c = 17; // re initialization is not possible    


let userName = "Sanjay"; // string
let userAge = 25; // number
let isMentor = true; // boolean 
let userObj = { name: "sanjay", age: 25, isMentor: true }; // object
let userArr = ["sanjay", 25, true]; // array [object]
console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(isMentor, typeof isMentor);
console.log(userObj, typeof userObj);
console.log(userArr, typeof userArr);