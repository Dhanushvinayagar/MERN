const numbers = [6,5,7,4,3,2,1,9,8]

const compose = (f,g) => {
    return (x,y)=>f(g(x),y)
}

const sort = (array) => array.sort((a,b)=>a-b)

const findMiddleElement = (array,number) =>{
    const multipliedArray = array.map(element => element*number);
    return multipliedArray[Math.floor(array.length/2)]
} 

const composedFn  = compose(findMiddleElement,sort)

const result = composedFn(numbers,10)

console.log(result)