// console.log("Program is Running please wait........"); 

//setTimeOut==> allows us to run the function once after the interval of the time 

//clearTimeout==> allows us to run the function repeatedly after the interval of the time..

// function greet(name){
//     console.log("Hello Good Morning, "+name)
// }

// setTimeout(greet,3000,"John")

// setTimeout(() => {
//     console.log("Now working...");    
// }, 2000);

// setInterval(greet,2000,"MD Eesha");



function displayTime()
{
    const d= new Date();

    console.log(d.getHours()+" "+d.getMinutes()+":"+d.getSeconds());
    document.getElementById('time').innerHTML = "Time:"+d.getHours()+" "+d.getMinutes()+":"+d.getSeconds();
}

setInterval(displayTime,1000);