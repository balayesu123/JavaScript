/*
// ********** var variable ***********

// multi line declaration
var x;  // declaration
x=10;    // initialization

// single statement declaration + initialization
var x=10;

//single statement - multiple variable
var x=100, y=200;

document.write(x)
console.log(x)
console.log(y)


// ********** let variable ***********

let a = "Welcome" , b = 500;

document.write(a)
console.log(a)
console.log(b)

// ********** difference btween var and let variable ***********

console.log(m);  // var is functional scope if value not defined to variable not throw any error, print undefined message and also execute after error line code
                // let is block scope if value not defined to variable  throw an error, print error message and not execute after error line code
 var m = 5;
 // let m = 10; 
console.log(m);

// ********** const variable ***********

const p=20;
console.log(p);

// p=30;       // if we declar value to const variable, we can not reinitialize will get Type Error.
// console.log(p);

*/


// ********** Data Types ***********

// JavaScript is dynamically typed language no neet to specify the data type to variable by default it consider the data type based on the value.

let x=50;
console.log(x);
console.log(typeof(x)); // number  // to know the data type we have to use typeof() method 

let y=50.50;
console.log(y);
console.log(typeof(y));  // number

let str="value";
console.log(str);
console.log(typeof(str)); // string

let flag=true;
console.log(flag);
console.log(typeof(flag)); // boolean

let status=null;
console.log(status);
console.log(typeof(status)); // object

let value;
console.log(typeof(value));  // undefined

