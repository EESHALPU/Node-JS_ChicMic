let complete=false;
let prom=new Promise(function(resolve,reject){
    console.log("Fetching Data Please wait......")
    setTimeout(()=>{
        if(complete)
        {
            resolve("Here is success!!")
        }
        else{
            reject("Here is failure...");
        }
    },3000)
   
});

let onFullFillment=(result)=>{
    console.log(result);
}


let onRejection=(error)=>{
    console.log(error);
}


prom.then(onFullFillment);
prom.catch(onRejection);

// prom.then(onFullFillment).catch(onRejection);
