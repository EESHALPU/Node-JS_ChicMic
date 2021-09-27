let arr=[10,20,32,45,65,32,145];

let maximum=arr.reduce(function(max,ele)
{
       ele>max?max=ele:"";
       return max;

},0);

console.log("Max element in array: "+maximum);