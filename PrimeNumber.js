
function prime(num)
{
    let count = 0;
    for(let i=1 ; i<=num ; i++)
    {
        if(num%i === 0)
        {
            count++
        }
    }
    if(count === 2)
    {
        return true;
    }

    return false;
}

console.log(prime(5));  // true
console.log(prime(4)); // false