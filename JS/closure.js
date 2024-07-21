
function simpleInterest(principal){
    const RATE_OF_INTEREST = 10
    return function(time){
        return (principal*time*RATE_OF_INTEREST)/100
    }
}

const closure = simpleInterest
const principal = 1000
const time = 2

const SI = closure(principal)(time)
console.log(SI)