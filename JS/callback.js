//callback - fuction passes another function as a parameter , the inner fuction is used to call the outer function

//timeout -execute a single time
setTimeout(function () {
    console.log("Timeout!");
},3000)

//interval - execute infinite number of time
var a=0;
let interval =  setInterval(function () {
    a+=1
    if(a==5){
        clearInterval(interval)   //stop the setinterval
    }
    console.log("Interval!",a);
},3000)

//set interval in arrow
var i=0;
let inter =  setInterval( () =>{
    i+=1
    if(i==5){
        clearInterval(inter)   //stop the setinterval
    }
    console.log("Arrow Interval!",i);
},3000)

