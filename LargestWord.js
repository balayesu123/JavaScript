
function largestWord(str)
{
    let largeword = "";

    let words = str.split(" ");
    for(let word of words)
    {

        if(word.length > largeword.length)
        {
            largeword = word;
        }
    }

    return largeword;
}

console.log(largestWord("i love javascript language"));