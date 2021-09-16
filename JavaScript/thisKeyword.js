const emp={
    firstName:"Manan",
    lastName:"singh"
}

const person={ 
    firstName:"John",
    lastName:"David",
    id:56545,
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}

console.log(person.fullName());