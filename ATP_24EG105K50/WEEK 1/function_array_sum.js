let findSum=function(array)
{
    //To store the sum
    let sum=0;

    for(let i=0;i<array.length;i++)
    {
        // Add each element to the sum
        sum=sum+array[i]
    }
    // Return the final sum
    return sum;
}
let arr=[90,65,78,99]
let result=findSum(arr)
console.log(`The sum of the array : ${result}`)