
const number=[12,44,10,20,30,40,32];

let text="";

number.forEach(myFunction);

function myFunction(value,index,array)
{
    text+=value+" ";
}

console.log(text);