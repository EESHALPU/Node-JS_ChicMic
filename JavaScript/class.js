class Car{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
    age()
    {
        let date=new Date();
        return date.getFullYear()-this.year;
    }
}

myCar=new Car("Ford",2014);

console.log(myCar.age());
const date=new Date();

console.log(date.getFullYear());
console.log(date.getMonth()+1)

