

const fruits=new Map([
    ["Apple",200],
    ["Bananas",320],
    ["Orange",400]
]);

console.log(fruits);
console.log(fruits.get("Bananas"));

console.log(fruits.set("Bananas",420));

console.log(fruits.size);

fruits.delete("Apple");
console.log(fruits.has("Apple"));