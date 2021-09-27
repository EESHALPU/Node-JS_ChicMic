let complete=true;
let prom=new Promise(function(resolve,reject)
{
    console.log("Data is fetching  please wait.....");

    setTimeout(() => {
        if(complete)
        {
            resolve("Here is success..")
        }
        else{
            reject("Failed......")
        }
        
    }, 3000);
});

let onFullFillment=(result)=>{
    console.log(result)
}

let onRejection=(error)=>{
    console.log(error);
}


setInterval(() => {
    prom.then(onFullFillment);
    prom.catch(onRejection);
}, 2000);
