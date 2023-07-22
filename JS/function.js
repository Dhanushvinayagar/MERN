//variable as a function
var funy = function(){
    return("Funy function")
}
console.log(funy())

//arrow function

var func = name => "Name is "+ name;

var fun = (name) => {
    return "Name is "+ name;
}

var agefun = (name,age) => {
    return "Name is "+ name+".Age is " +age;
}
console.log(func("Stark"))
console.log(fun("Tony"))
console.log(agefun("Ironman",35))


//map
var arr=[1,2,3,4]
var newarr1=arr.map( n => n*2 )
console.log(arr)
console.log(newarr1)

//foreach
var newarr2=[];
arr.forEach(element => {
   newarr2.push(element) 
});
console.log(newarr2)

//find - find the first element that satisfies the condition
var find = arr.find( element => element<3 )
console.log(find)

//filter - find all related element that satisfies the condition
var filter = arr.filter( element => element<3)
console.log(filter)

//default parameters

function area(side=4){
    return side*side
}
console.log("Area:",area(5))
console.log("Area:",area())

//optional chaining
var charr=[1,2,3,4,5]
var [a,b,...rest]=charr
console.log(a,b,rest)

//array concat
var arr1=[1,2,3,4]
var arr2=[5,6,7,8]
console.log("Concat:",arr1.concat(arr2))
console.log(...arr1,...arr2)
console.log([...arr1,...arr2])

//object destructing 
let obj={
    name:"Steve",
    age:100
}
let {name:n,age,height=6.3,number}=obj      //name age are necessary variables for usage , n is  alias for name 
console.log(n,age,height,number)

let namey="Thor"
let agey=1500
let h=5.9
let obj1={
    namey:namey,
    agey:agey
}
let obj2={
    namey,
    agey,
    height:h,
    weight:80
}
console.log(obj1)
console.log(obj2)