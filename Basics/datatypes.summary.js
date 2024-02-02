// Primit Data Types 

/*
String 
Number
Boolean
Null
Undefined
Symbol
BigInt
*/

const score = 100
const scoreValue  = 101.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('12344')
const anotherId = Symbol('12344')

// console.log(id === anotherId);

// const bigNumber = 45526588627584514514551452n;



// Non Premitive ( Reference Data Type) 
/*
Array
Objects
Functions
*/


// *********** Array Decleration ***********
const heros =  ["shaktiman", "Doremon", "JuniorG"];

// *********************** Objects ***********************

let myObje = {
    name: "saurabh",
    age: 23,
    city: "****",
    State: "jsja"
}

// ************** Function *******************
const myFunction = function() {
    // console.log("hello world");
}

// ************** how to checkd the data type*****************
/*
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);

console.log(typeof myFunction);

*/



// #####################################   MEMORY ########################
// 1. Stack         2. Heap

let myYoutubename = "jiteshChaudharydotcom";

let anothername = myYoutubename
// change the name of the Variable
anothername = "chaiaurCode"
// console.log(myYoutubename);
// console.log(anothername);


let userOne = {
    email: "userexample@google.com",
    upi :"user@uply"
}

let userTwo = userOne;

userTwo.email = "hiteshChoudhary@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
