//get input
var inp=process.argv
a=parseInt(inp[2])  //if no parseInt automatic typeconversion
b=parseInt(inp[3])
c=inp[4]
const {add,sub,mul,div,mod}=require('./operation.js')
if(c=='+')
    console.log(add(a,b))
else if(c=='-')
    console.log(sub(a,b))
else if(c=='*')
    console.log(mul(a,b))
else if(c=='/')
    console.log(div(a,b))
else
    console.log(mod(a,b))