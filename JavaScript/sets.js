
const letter=new Set(["A","B","C","D","A","C"]);
letter.add("L");
console.log(letter);

letter.delete("A");
console.log(letter);

console.log(letter.has("A"));  //return true if value is exits

console.log(letter.size);

//const number=new Set([15,6,45,25,52,14,65,42]);
const number=[15,6,45,25,52,14,65,42];

number.forEach(myFun());
var sum=0;

function myFun(value,index,arr)
{
    sum+=value;
}

console.log(sum);




