
const con=10
console.log("const:",con)

var b;
//function scope , redeclaring is possible , hosisting(console.log(a);let a=9;)
console.log("var:",b)

let le=30
//block scope , no redeclaration , no hosisting(console.log(a);let a=9;)
console.log("let",le)

//string literals
var sub_name="CSE"
var course={
    name:"Javascript"
}
console.log(`Course name : ${sub_name}, ${course.name}`)

//functions
var a=10,b;
function func()
{
    a=9;
}
func()
console.log(a)

function add(a,b){
    return a+b;
}
var ans=add(1,2)
console.log("Add:",ans)

function fun(a){
    return a%2==0 ? "Even" :"Odd"
}
var answer=fun(4)
console.log("Odd/even:",answer)

//typecasting
console.log(1+2+"str"+4+" string"+" "+"append"+1.0)

console.log(1=="1") //check without data type
console.log(1==="1") //check with data type

//odd or even using if else
var num=4;
if(num%2==0) {
    console.log("even")
}
else{
    console.log("odd")
}

//destructring in array
var desarr=['Apple','Mango',"Orange"]
var [a,b,c]=desarr
console.log("Destructuring in array",a,b,c)

//array
console.log("Array:")

var newarr=[1,2.0,"abcd",true,{name:"wanda"},[1,2,3]]
console.log(newarr,typeof(newarr))
console.log(newarr[4])
console.log(newarr[5])

var arr=[1,2,3,4,5,6,7,8,9,0];
console.log(arr)
console.log(arr[1])
console.log(arr[-1])
console.log("Slice",arr.slice(-1))


//add the element to last of array
arr.push(10)
console.log(arr)

//add the element to last of array
arr.pop()
console.log(arr)


//remove the element to first of array
arr.shift()
console.log(arr)


//add the element to first of array
arr.unshift(1)
console.log(arr)

//splice-slice with removing the element from the array
console.log("Splice:")
var splice=arr.splice(3,6)
console.log(arr)
console.log(splice)

//1 to 5 push 
console.log("Array operation:")
var array=[1,2,3,4,5]

array.push(6,7,8,9,10)
console.log(array)

var splicey=array.splice(0,4)
console.log(array)
console.log(splicey)

//slice-slice without removing element in array
var slice=array.slice(3,6)
console.log(slice)
console.log(array)

//declare the array
var myarr=new Array(5)  //assign null to upto five index
myarr[0]=0
myarr.push(1,2,3,4,5)
console.log(myarr)

//firstname , lastname
var firstname="Dhanush";
var lastname="Kandasamy";
var fullname=firstname+" "+lastname
console.log(fullname)


//random number from 1 to 100
var ran=Math.round(Math.random()*100)
console.log("Random number:",ran)


//objects

var obj={
    firstname:"Dhanush",
    lastname:"Kandasamy"
}
console.log(obj.firstname)
console.log(obj["lastname"])
obj.age=20;
obj["salary"]=900000
console.log(obj)

for(var i in Object.keys(obj)){
    console.log(Object.keys(obj)[i]+":"+Object.values(obj)[i])
}

//nested object
var object={
    name:"Scarlet", //string
    num:[1,2,3],    //array
    marks:{
        math:200,
        phy:100  //integer
    }
}

var sub="phy"
console.log(object.name +" "+ object.num +" "+object.marks.math +" "+object.marks[sub])

