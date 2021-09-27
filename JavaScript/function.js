// //function which can take n number of arguments...

// function myFun(...x)
// {
//     console.log(x);
//     // return x.reduce(function(acc,curr)
//     // {
//     //     acc+=curr;
//     //     return acc;
//     // })
// }

// console.log(myFun(12,34));
// console.log(myFun(120,340,221));
// console.log(myFun(48,354,120,54,12));



// // let show=function()
// // {
// //     console.log("function called");
// // }

// // show();


// // let show=()=>console.log("function invoked..");
// // show();

// (function(){
//     console.log("function called imediately..");
// })();


var x=100;

function xyz()
{
    var x=200
    function xyz1(){
       // var x=300
        console.log(x);
    }
    return xyz1;
}
const z=xyz();
z();