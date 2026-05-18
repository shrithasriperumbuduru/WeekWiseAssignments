//function to find the largest
let findLargest=function(a,b,c)
{
    let large=0;
    if(a>b)
    {
        if(a>c)
        {
            large=a;
        }
        else
        {
            large=c;
        }
    }
    else
    {
        if(b>c)
        {
            large=b;
        }
    }
    return large;
}
// Function call with 3 numbers
let result=findLargest(100,20,98)
//Displaay the result
console.log(`The largest number is ${result}`)
console.log("largest number :",result)