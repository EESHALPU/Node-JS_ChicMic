// var a=100;
// let b=200;
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
// }
// console.log(a);
// console.log(b);

//---------------------------

// let a;
// console.log(a);

// const obj={
//     name:"amar",
//     age:20
// }

// // delete obj.name;

// console.log(obj);

//const a=20;
// {
//    const a=100;
//     {
       
//        console.log(a);
//     }
// }
// console.log(a);


//-----------------------------------clousure-----------------------------------

// function x()
// {
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }

// x();



// function x()
// {
//     var a=7;
//    return function y()
//     {
//         console.log(a);
//     }
// }

// var z=x();
// console.log(z);
// z();


// function z()
// {
//     var a=200;
//     function x()
//     {
//         var b=30;

//         function y(){
//             var c=40;
//             return (a+b+c)
//         }
//         y();
//     }
//     x();
    
// }
// z();
// document.getElementById("demo").innerHTML=z();

// let a=100;
// function x()
// {
//     var a=200;
//     function y()
//     {
//         //var a=150;
//         console.log(a);
//     }
//   y();
// }
// x();
// console.log(a);



setTimeout(function(){
    console.log("Timer");
},5000);

console.log("Please wait....");