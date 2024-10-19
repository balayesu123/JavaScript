
// defining string
let s="welcome";  // way 1
let s1=new String("hello");   // way 2

// charAt()
console.log(s.charAt(2));  // l
console.log(s1.charAt(0)); //// h

//concat()

console.log(s.concat(" JavaScript"));            // welcome JavaScript
console.log(s.concat(" JavaScript ").concat(s1));  // welcome JavaScript hello

// replace()
 s="welcome to javascript";
 console.log(s.replace("javascript","Java"));  // welcome to Java

 //substring()
 s="welcome";
 console.log(s.substring(0,3)); // wel
 console.log(s.substring(3,7)); // come

 //toLowerCase() & toUpperCase()
 s="WELcome"
 console.log(s.toUpperCase()); // WELCOME
 console.log(s.toLowerCase()); // welcome

 //split()
 s="welcome to javascript";
 let arr=s.split(' ');

 console.log(arr[0]);
 console.log(arr[1]);
 console.log(arr[2]);

 // trim()

 s=" welcome ";
 console.log(s.trim());  // removing first and last spaces


// ******************** Numbers ************************

// defining Numbers
let x=100;
let y=new Number(200);

let p=102; // integer value
let q=102.7; // decimal
let r=10e2;  //exponencial value

console.log(p,q,r);

// isInteger()
x=10;
y=1.8;
z="x";

console.log(Number.isInteger(x));  // true
console.log(Number.isInteger(y));  // false
console.log(Number.isInteger(z));  // false

//parseInt()  - converting a string into number
s="1234";
console.log(typeof(s));                     // string
console.log(typeof(Number.parseInt(x)));    // number

//parseFloat()  - converting a string into number

s="10.50";
console.log(typeof(s));                     // string
console.log(typeof(Number.parseFloat(x)));    // number

// toString()  - converting number to string

let n=12;
console.log(typeof(n));  // number
console.log(typeof(Number.toString())); // string

 n=12.13;
 console.log(typeof(n));  // number
 console.log(typeof(Number.toString())); // string



























