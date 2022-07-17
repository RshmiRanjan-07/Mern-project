let arr=[2,12,7,3,4,10];
let a=0
function biggest(a)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[0]<arr[i])
        {
            arr[0]=arr[i]
        }
    } 
    a=arr[0];
    return a;
}
console.log(arr);
const largest = biggest(a);
console.log(`the largest no. is ${largest}`);