// //Strings......

// //==>String Template...

// let header="Tempplates Literals"
// let tags=["template literals","Javascript","es6"]

// let html=`<h2>${header}</h2><ul>`

// for(const x of tags)
// {
//     html += `<li>${x}</li>`
// }

// html +=`</ul>`

// console.log(html);


// ----------------------------------

//.......................Numbers..........................

// let x=20;
// let y=-2;

// console.log(x/0);
// console.log(y/0)
// console.log(0xA);        
// console.log(x.toString(2))





// -------------------------------Array----------------------------



// const fruits=["Apple","Kiwi","Orange"];
// const veg=["cucumber","Tomato","Potato"]
// console.log(fruits);

// const allItems=fruits.concat(veg);
// console.log(allItems);

// console.log(fruits.join(" * "));
// console.log(fruits.toString());

// fruits.length=10;

// delete fruits[0];
// console.log(fruits);




// const arr=[12,43,56,87,65,32]

// const op=arr.map((x)=>{return x.toString(2)})

// const op=arr.filter((x)=>x%2==0)

// const op=arr.map(function(x){
//     return x>50;
// })


// const op=arr.filter((function(x){
//     return x%5==0
// }))



// const above18=(x)=>x>=18;
// const op=arr.some(above18);
// console.log(op);


//.......................Reduce Function.......................
//it takes all array element and return single element... like sum or max...


//sum of array using normal function...

/*function findSum(arr)
    {
        let sum=0;
        for (let index = 0; index < arr.length; index++) {
            sum+=arr[index];
            
        }

        return sum;
    }

    console.log(findSum(arr));  */

//     const arr=[12,43,56,87,65,32];

//     const output = arr.reduce(function(acc,curr){
//         acc+=curr;
//         return acc;
//     });

// console.log(output);


//find the maximum value...using normal function...

    // function findMax(arr)
    //     {
    //         let max=0;
    //         for (let index = 0; index < arr.length; index++) {
    //             if(arr[index]>max)
    //             {
    //                 max=arr[index];
    //             }
                
    //         }

    //         return max;
    //     }

    //     console.log(findMax(arr));

    
    // const arr=[12,43,56,87,65,32];

    // const output=arr.reduce(function(acc,curr)
    // {
    //     if(curr>acc){
    //         acc=curr;
    //     }
    //   return acc;
    // },0)

    // console.log(output);


    const users=[
        {firstName:"Aman",lastName:"Singh",age:26},
        {firstName:"John",lastName:"David",age:30},
        {firstName:"Rakesh",lastName:"Singh",age:55},
        {firstName:"Raman",lastName:"Singh",age:35}
    ];

    // const output=users.map((x)=>x.firstName+" "+x.lastName).join("     ");
    // console.log(output); 

    const output=users.filter((x)=>x.age>30).map((x)=>x.firstName);
    console.log(output);

