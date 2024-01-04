let number;

// sort -> 1) Mutate the original array , Sort based on ASSCI values

//NUMBERS
number = [5, 3, 4, 2, 1]
number.sort()
console.log(number);

number = [10, 5, 25, 35, 100, 2]
number.sort((a, b) => a - b)     //ascending
console.log(number);
number.sort((a, b) => a - b)         //descending
console.log(number);

// STRINGS
let s = ["b", "a","A", "bb", "B", "ba", "two","one", "apple"]
s.sort()        //since it works based on ASSCI  (a-b) wont work on it 
console.log(s);

// OBJECTS
let arr = [

    {
        "name": "Steve",
        "age": 120
    },
    {
        "name": "Banner",
        "age": 51
    },
    {
        "name": "Nick",
        "age": 60
    },
    {
        "name": "Natasha",
        "age": 35
    },
    {
        "name": "Lang",
        "age": 54
    }
]
arr.sort((a, b) => a.age - b.age)
console.log(arr);
arr.sort((a, b) =>{
    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
})
console.log(arr);

