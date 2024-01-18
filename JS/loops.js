const numbers = []
for (let index = 1; index <= 10; index++) {
    numbers.push(index)
}
const numberObj = {}
for (let index = 0; index < numbers.length; index++) {
    numberObj[index]=numbers[index]
}

function cube(i){
    return i*i*i
}

//traditional loops
const reverseforloop = () => {
    for (let i = numbers.length - 1; i >= 0; i--) {
        cube(i)
    }
}

const usualforloop = () => {
    for (let i = 0; i < numbers.length; i++) {
        cube(i)
    }
}

const whileloop =()=>{
    let i=0;
    while(1){
        if(i>=numbers.length) break
        cube(numbers[i])
        i++
    }
}


//accessing each element in array 
const foreachloop = () =>{
    numbers.forEach(element=>{
        cube(element)
    })
}

//HOF used returing array of elements
const maploop = () =>{
    numbers.map(element=>cube(element))
}

const filterloop = () =>{
    numbers.filter(element=>cube(element)>element)
}


// looping objects (treats array,string as objects) not applicable to number
const forinloop = () =>{
    for (const key in numberObj) {
       cube(key)
    }
}

// iterate string & array not pplicable to objects and number
const forofloop = () =>{
    for (const i of numbers) {
        cube(i)
    }
}


usualforloop()
reverseforloop()
whileloop()
foreachloop()
maploop()
filterloop()
forinloop()
forofloop()
