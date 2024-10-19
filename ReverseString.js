
// approach 1


function reverseString(str)
{
    let  strReverse = "";
  
  for (let i=str.length-1 ;  i>=0 ; i--)
  {
    strReverse += str[i]
  }

  return strReverse;
}

console.log(reverseString('Balayesu'));

// approach 2

function reverStr(word)
{
   let reve = word.split("").reverse().join("");

   return reve;
}

console.log(reverStr('ABCD'));
