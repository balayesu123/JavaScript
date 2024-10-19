let d=new Date();

console.log(d);  // 2024-09-05T03:34:02.624Z

console.log(d.getDate());  //  return current date from 1-31
console.log(d.getMonth()); // month return from 0-11  0-january, 1-febravery...,
console.log(d.getMonth()+1); // to get current month
console.log(d.getFullYear()); // return current year

console.log(d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear());  // 5-9-2024

console.log(d.getHours());  // return from 0-23
console.log(d.getMinutes()); // return from 0-59
console.log(d.getSeconds());  // return from 0-59

console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());  // 9:14:38
 






