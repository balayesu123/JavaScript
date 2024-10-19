// declaring array

// way 1

let arr = ["A","B","c","D"];

//way 2

let arr2 = new Array(10,20,30,40);

// Accesing all elements in array
console.log(arr);             // [ 'A', 'B', 'c', 'D' ]
console.log(arr2);            // [ 10, 20, 30, 40 ]

// accesing  single element
console.log(arr[2]);           // c

// updating the value in array
arr[1]="F";
console.log(arr);            // [ 'A', 'F', 'c', 'D' ]

// we can have variable of different types in the same Array.
let myArr=[100, "welcom", 10.50, true];         
console.log(myArr);           // [ 100, 'welcom', 10.5, true ]

// we  can Add objects in array
let person1=
             {
                name:"bala",
                age:30

             };
let person2=
             {
                name:"yesu",
                age:35

             };

let myArray=[person1,person2];
console.log(myArray);          // [ { name: 'bala', age: 30 }, { name: 'yesu', age: 35 } ]


let fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.length);            // 4

// looping elements from array
for(let i=0 ; i<fruits.length ; i++)
{
    console.log(fruits[i]);
}

// output :
// Banana
// Orange
// Apple
// Mango

// looping elements from array using for/of loop

for(ele of fruits)
{
    console.log(ele);
}

// Recognizing an array - typeof
console.log(typeof(fruits));     // object

//verifying given attribute is array or not
console.log(Array.isArray(fruits)); //true

