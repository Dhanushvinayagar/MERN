//REFERENTIAL EQUALITY - applicable for both array and objects
let obj = {
    "name": "Steve",
    "age": 21
}

obj["name"] = "Rogers";
obj.age = 110;

console.log("Object accessing ...", obj);

let objCpy = obj;               // passing refernce of the obj to obCpy 
console.log(objCpy, objCpy === obj);     // mutating objCpy also mutates the obj

let objCpy1 = { ...obj }       // spreding the obj into objCpy (i.e ... acts as a for loop)
console.log(objCpy1, objCpy1 === obj);       // objCpy1 & obj has different reference  (i.e mutating objCpy1 has no effect on obj)

// similar property is also applicable to array
let arr = [1,2,3]
let arrCpy = arr;
arrCpy.push(4)
console.log(arr,arrCpy);

let arrCpy1 = [...arr]
arrCpy1.push(5)
console.log(arr,arrCpy1);