const a = 10            // immutable   
//  a=20                // not possible
console.log(a);

const s = "a"            // immutable 
// s="a" or  s="ab"     // not possible
console.log(a);

const arr = [1, 2, 3, 4]       // mutable as  an element but not as another array
arr.pop()
arr.push(5)
console.log(arr);
// arr = [6,7,8]      //not possible

const object = {
    "name": "Tony",
    "age": 45
}
// accessing key - values 
object["name"] = "Stark"
object.age = 46
console.log(object);
// object = {}          // not possible



// TYPE CHECKING
console.log("CONDITION AND TYPE CHECKING : ");

console.log("== used for value checking",1=="1" , "=== used to check the type also " ,1===1, 1==="1");
console.log(true === true , false === false);                           // if === returns false then there are chances  == may returns true but if == returns false then === always returns false

console.log("1>0", 1 > 0, "1<0", 1 < 0);
console.log("apple>A", "apple" > "A","apple<A", "apple" < "A");      // checks ASSCI values
console.log("true>false", true > false, "true<false", true < false);

console.log("Occurence with any one of the types like ",null,NaN ,undefined ," when compared to any datatype results in ",false);
console.log(null > undefined, null < undefined);
console.log(NaN>null , null<NaN);
console.log(true >NaN);



//TYPEOF
console.log(typeof NaN , typeof undefined , typeof null);

//isNaN for typechecks 
console.log("isNaN");
console.log(isNaN("1") , isNaN("a"));

console.log("undefined");
console.log(undefined == undefined , typeof undefined === 'undefined');         // assigned when there is no value intializaton or no key in object

console.log("null");
console.log(null===null);           //dont use typeof to check it will gives null as object

