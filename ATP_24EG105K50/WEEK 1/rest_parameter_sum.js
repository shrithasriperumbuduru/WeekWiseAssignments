//function that receives no of args and return their sum
function findSum(...a)
{
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i];
    }
    return sum;
}
//Function Call
let sum=findSum(10,20,30,40,50)
//Display the Sum
console.log("The sum is : ",sum)
/*
const findSum=(...numbers)=.{
return numbers.reduce((sum,el)=>sum+el)
}
let result=findSum(10,20,30)
console.log(result)
*/
