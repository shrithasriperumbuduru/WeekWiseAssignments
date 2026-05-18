let a=[90,78,65,98]
let small=a[0]
//To find The smallest in Integer 
for(let i=0;i<a.length;i++)
{
    if(small>a[i])
    {
        small=a[i]
    }
}
//Display
console.log("smallest is"+small)