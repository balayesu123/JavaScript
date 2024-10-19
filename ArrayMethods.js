
let fruits = ["Banana","Orange","Apple","Mango"];

// toString()  method will print the values by coma seperated values
console.log(fruits.toString());  // Banana,Orange,Apple,Mango


// join()  method by default print values by coma seperated values
// and we can specify our own symbol to separate the values

console.log(fruits.join());      // Banana,Orange,Apple,Mango
console.log(fruits.join("*"));   // Banana*Orange*Apple*Mango


// pop()
fruits = ["Banana","Orange","Apple","Mango"];

console.log(fruits.pop());  // Mango // remove last element and print
console.log(fruits);  //  [ 'Banana', 'Orange', 'Apple' ]

// push()

fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.push("kiwi")); // 5  // add new element at last position to the array and return length
console.log(fruits);   // [ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//shift()

fruits = ["Banana","Orange","Apple","Mango"];

console.log(fruits.shift()); // Banana  // remove first element and return that element

// unshift()

fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.unshift("Lemon"));   // 5  // add new element at first position to the array and return length
console.log(fruits);  // [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]

// deleting elements from the array
fruits = ["Banana","Orange","Apple","Mango"];
delete fruits[1];
console.log(fruits);   // [ 'Banana', <1 empty item>, 'Apple', 'Mango' ]

// concat() - joining/merging 2 or more arrays
let arr1=[20,30];
let arr2=["A","B","C"];
console.log(arr1.concat(arr2));  // [ 20, 30, 'A', 'B', 'C' ]

let arr3=[40,50]
console.log(arr1.concat(arr2,arr3)); // [ 20, 30, 'A', 'B', 'C', 40, 50 ]


//slice() - it will return the elements from array index value we given

fruits=[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ];
console.log(fruits.slice(1));  // [ 'Orange', 'Apple', 'Mango', 'kiwi' ]
console.log(fruits.slice(2));  // [ 'Apple', 'Mango', 'kiwi' ]

//sort()

fruits=[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ];
fruits=[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ];
console.log(fruits.sort());    // [ 'Apple', 'Banana', 'Mango', 'Orange', 'kiwi' ]

let nums=[30,20,40,10];
console.log(nums.sort());  // [ 10, 20, 30, 40 ]

// reverse()
fruits=[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ];
console.log(fruits.reverse());  // [ 'kiwi', 'Mango', 'Apple', 'Orange', 'Banana' ]




