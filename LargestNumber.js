
function findLargestNumber(arr)
{
    let largestNum = arr[0];

    for(let i=1; i<arr.length ; i++)
    {
        if(arr[i] > largestNum)
        {
            largestNum = arr[i];
        }
    }

    return largestNum;

}

console.log(findLargestNumber([9,1,2,20,4,5]));