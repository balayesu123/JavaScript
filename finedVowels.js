
function vowels(str)
{
  let isVowels = ['a', 'e', 'i', 'o', 'u'];
  let allVowels = "";
  let count = 0;

  for(let i=0; i<str.length ; i++)
  {
    if(isVowels.includes(str[i].toLowerCase()))
    {
        allVowels += str[i];
        count++;

    }
  }

  return (allVowels + " = " + count);

}

console.log(vowels("HEllo world"));