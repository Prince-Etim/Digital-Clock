/* */
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


/*This function help to get our time directly from our computer*/
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
   let s = new Date().getSeconds();
    let ampm ="AM";


    /*This code help to switch from AM to PM when our hour h is greater than 12 in our computer*/
if(h >= 12){
    h = h - 12;
    ampm = "PM";
}

/*This line says if hour h is less than 10 in value, put 0 before the value of h e.g 06,07,08 etc */
h = h<10 ? "0" + h : h
m = m<10 ? "0" + m : m
s = s<10 ? "0" + s : s

/*this code help to put the hours, minutes and seconds value directly on our html element, using id hour, minutes, seconds and AM/PM */
hourEl.innerText = h;
minuteEl.innerText = m;
secondEl.innerText = s;
ampmEl.innerText = ampm;

setTimeout(()=>{
updateClock()
}, 1000)
}

/*below function is called or invoked here to help this code display the time its got from our computer */
updateClock()