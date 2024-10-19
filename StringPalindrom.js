
function palindrom(str)
{
   let  reveserStr = str.split("").reverse().join("");

   return str === reveserStr; 
}

console.log(palindrom('racecar'));