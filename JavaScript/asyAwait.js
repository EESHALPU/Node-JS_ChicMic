console.log("async and await");

//https://developerfunnel.herokuapp.com/hotels

async function myFun()
{
    console.log("Inside myFun function..");
    const response=await fetch('https://developerfunnel.herokuapp.com/hotels');
    console.log('before response');
    const users=await response.json();
    console.log("user resolved");
    return users;
}

console.log("Before calling myFun")
let a=myFun();
console.log("After calling myFun");
console.log(a);
a.then(data=>console.log(data));
console.log("Last line of this file..");