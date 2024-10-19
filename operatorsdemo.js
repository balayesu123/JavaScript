// ********** Arithmetic operators + - * / % **


let x=10, y=20;

console.log(x+y); // 30
console.log(x-y); // -10
console.log(x*y); // 200
console.log(x/y); // 0.5
console.log(x%y); // 10
console.log(5**2); // 25

// increment operators

//x=x+1;
 x++;   // post incremental operator
// ++x;   // pre incremental operator
console.log(x);


// decrement operators

y=20;
// y=y-1;
 y--;   // post decremental operator
// --y;   // pre decremental operator
console.log(y);




// ********** Assigned operators ***************

x=100;
y=50;

console.log(x+=y);    //x=x+y;  // 150
 console.log(x-=y);    //x=x-y;  // 100
 console.log(x*=y);    //x=x*y;  // 5000
 console.log(x/=y);    //x=x/y;  // 100
 console.log(x%=y);    //x=x%y;  // 0

 

// ********** Relational/comparison operators ***************
// alway return a boolen values true/false
// < > <= >= !=

a=10;
b=20;

console.log(a>b); // false
console.log(a<b);  // true
console.log(a>=b); // false
console.log(a<=b); // true
console.log(a!=b); // true


// ********** ternary operator ***************

console.log(a<b?a:b);  // return a value 10
console.log(b>a?b:a);  // return b value 20 



// ********** logical operator ***************
// && || !

let p=true;
let q=true;
let r=false;
let s=false;


console.log(p && q);  // true
console.log(p && r);  // false
console.log(p || q);  // true
console.log(r || s);  // false
console.log(!p); // false
console.log(!r); // true








