// if some data is assigned directly the complete reference is passed to that variable
let num =1
let num1 = num
console.log(num === num1); 

//cloning - array ,object
let arr = [1,2,3,4,5]
let cpyArr = [...arr]
arr.push(6)
cpyArr.pop()
console.log(arr , cpyArr);

let obj = { "a" : "abcd" ,"e":"efgh" , "i" :"ijkl" ,"m":"mnop"}
let cpyObj = {...obj}
obj["q"] ="qrst"
cpyObj["u"] = "uvwxyz"
console.log(obj,cpyObj);

//shallow clone
let object = { "a":{"aa":"aaa" , "b" :"b"}}
let shallowObjCpy = { ...object }
shallowObjCpy["b"] = "not affected"       //does not affect object
shallowObjCpy.a.aa = "affected"       // affect object

console.log(object,shallowObjCpy);

//deep clone
let newObject = { "a":{"aa":"aaa" , "b" :"b"}}
let deepClone = JSON.parse(JSON.stringify(newObject))
deepClone.a.aa = "not affect"
let structedClone = structuredClone(newObject)
structedClone.a.aa = "wont affect"
console.log(newObject , deepClone , structedClone);