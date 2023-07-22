const {color}=require('./color.js')

const rand = () =>{
    var ran=Math.round(Math.random()*color.length)
    console.log("Random number:",ran)
    return color[ran].code
}
// console.log(rand())

var http=require("http")

http.createServer(
    function (req, res) {
        res.write(`<h1 style="color:${rand()};text-align:center">color</h1>`); //write a response to the client
        res.end(); //end the response 
    console.log(rand())
}).listen(8000)