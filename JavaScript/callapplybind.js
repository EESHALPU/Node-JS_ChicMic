// call apply bind...
let fullName=function(hometown,state)
{
    console.log(this.firstName+" "+this.lastName+" "+hometown+", "+state);
}
let name={
    firstName:"Aman",
    lastName:"Singh"
}

fullName.call(name,"Ludhiana","Punjab");

let name1={
    firstName:"Sachin",
    lastName:"Tendulkar"
}

//fullName.call(name1,"Amritsar","Punjab");  //-------using call method....

// fullName.apply(name1,["Amritsar","Punjab"]);  //------using apply method...

let printMyName=fullName.bind(name1,"Chandigarh","Punjab");
printMyName();
