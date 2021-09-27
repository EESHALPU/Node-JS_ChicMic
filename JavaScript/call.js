
// let printFullName=function(){
//     console.log(this.firstName+" "+this.lastName);
// }
// let name={
//     firstName:"Aman",
//     lastName:"Raj",
// }


// printFullName.call(name);

// let name2={
//     firstName:"Sachine",
//     lastName:"Tendulkar"
// }

// printFullName.call(name2);





let printFullName=function(hometown,state){
    console.log(this.firstName+" "+this.lastName+" "+hometown+" "+state);
}
let name={
    firstName:"Aman",
    lastName:"Raj",
}


printFullName.call(name,"Jalandhar","Punjab");

let name2={
    firstName:"Sachine",
    lastName:"Tendulkar"
}

printFullName.call(name2,"Phagwara","Punjab");