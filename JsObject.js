// creating javascript object

let person=
{
    firstname:"Bala",
    lastname:"yesu",
    age:30,
    weight:60
}

// Accesing object properties

// way 1

console.log(person["firstname"]);

// way 2

console.log(person.age);

// add new property to the existing object
person["height"]=5.5;
person.state="AP";

console.log(person.height);
console.log(person.state);

// updating the existing property value

person["weight"]=65;
console.log(person["weight"]);

// remove property from the existing object
delete person["age"];
console.log(person["age"]);   // undefined    (because we already deleted the property)


console.log("*********Looping object**************");

// for/in loop

for(let x in person)
{
   //console.log(x); // print only property names
   // console.log(person[x]); // print only property values
    console.log(x+"="+person[x]); // print both property names and its values
}
