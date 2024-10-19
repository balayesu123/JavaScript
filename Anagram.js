
// an anagram is a word that is formed by rearanging the letters of anaother word

function areAnagrams(str1, str2)
{
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("silent", "listen"));