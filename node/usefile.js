var fs=require('fs');
console.log(__dirname)

// order  : delete , rename , write , append , read

// read
fs.readFile(`${__dirname}/file.txt`,(err,data)=>{
    if(err){
        console.log("Error",err)
        return
    }
    console.log("Read:")
    console.log(data.toString())
})

//append file
fs.appendFile(`${__dirname}/file.txt`,"this is now appended",(err)=>{
    if(err){
        console.log("Error",err)
        return
    }
    console.log("Appended")
})

//overwrite
fs.writeFile(`${__dirname}/file.txt`,"this is extra written",(err)=>{
    if(err){
        console.log("Error",err)
        return
    }
    console.log("Write")
})

//rename
setTimeout( () =>{

    fs.rename(`${__dirname}/file.txt`,`${__dirname}/sample.txt`,(err)=>{
        if(err){
            console.log("Error",err)
            return
        }
     console.log("Renamed")

})},3000)

//remove
setTimeout(() => {

    fs.unlink(`${__dirname}/sample.txt`,(err)=>{
        if(err){
            console.log("Error",err)
            return
        }
        console.log("Deleted")
    })
    
},5000)