
let printFullName=function(hometown,state){
    console.log(this.firstName+" "+this.lastName+" "+hometown+" "+state);
}
let name={
    firstName:"Aman",
    lastName:"Raj",
}


printFullName.apply(name,["Jalandhar","Punjab"]);

let name2={
    firstName:"Sachine",
    lastName:"Tendulkar"
}

printFullName.apply(name2,["Phagwara","Punjab"]);