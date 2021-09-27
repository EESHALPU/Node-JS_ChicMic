const arr=[15,12,24,25,32,63];

//const op=arr.map((x)=>x*2)

//map....../
// const op=arr.map(function(x){
//     return x*3
// })
// console.log(op);


//Filter....

// const op1=op.filter((x)=>x%5==0)
// console.log(op1);


//Reduce...

const op=arr.reduce(function(acc,curr)
{
    acc+=curr;
    return acc;
})

console.log(op);

