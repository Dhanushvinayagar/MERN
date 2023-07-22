const { log } = require('console')
var fs = require('fs')
const { resolve } = require('path')

//promise read file
const rpromise = () => new Promise((resolve,reject)=>{
    fs.readFile(`${__dirname}/file.txt`,(err,data)=>{
        if(err){
            console.log("Error",err)
            reject("read error ")
        }
        resolve(data.toString())
    })     
}
)

const wpromise = () => new Promise ( (resolve,reject)=>{
    fs.writeFile(`${__dirname}/file.txt`,"this is extra written",(err)=>{
        if(err){
            reject("write error")    
        }
        resolve("write")
              
    })
})
console.log(rpromise)
console.log(wpromise)
const file = async() =>{
    try{
        const ready = await rpromise()
        console.log(ready)
        const writey = await wpromise()
        console.log(writey)
    }catch(err){
        console.log(err)
    }
}

file()

