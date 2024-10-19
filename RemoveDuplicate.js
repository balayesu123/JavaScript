
// remove duplicate numbers from array

function removeDuplicate(arr)
{

    let uniqueElements = [];

    for(let i=0 ; i<arr.length ; i++)
    {

    if(uniqueElements.indexOf(arr[i]) === -1)
    {
        uniqueElements.push(arr[i]);
    }

    }

    return uniqueElements;
}

console.log(removeDuplicate([1,4,1,5,4,2,3,6]));