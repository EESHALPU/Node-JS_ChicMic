const person={
    firstName:"John",
    lastName:"David",
    age:40,
    Dues:7800,
    Status:function()
    {
        if(this.Dues==0)
            return "No Dues"
        else{
            return "Hii "+this.firstName+" you have to paid INR "+this.Dues+" Rupees";
        }

    }
};

console.log(person.Status());


person["Dues"]=0;
console.log(person.Status());

console.log(Object.values(person));