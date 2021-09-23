
const date=new Date();

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// console.log(days[date.getDay()]);
// console.log(date.getDate())

// console.log(months[date.getMonth()]);

// console.log(date.getHours());
// console.log(date.getMinutes());

console.log("Date: "+date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear());


function myTime()
{
    if(date.getHours()<12)
        return (date.getHours()+ " AM")
        else if(date.getHours()==12){
            return (date.getHours()+ " PM")
        }

        else{
            return (date.getHours()-12+ " PM")
        }

}
console.log("Time: "+myTime());
