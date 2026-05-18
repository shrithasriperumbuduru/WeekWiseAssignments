let arraySearch=function(arr,find)
{
    let i=0;
    //element search
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]===find)
        {
            return i;
        }
    }
    return -1;
}
let array=[10,78,3,83,93,88]
let result=arraySearch(array,93)
//To search the Element in the array and find the index
if(result===-1)
{
    console.log("Not Found");
}
else
{
    console.log("Element found at index :",result)
}