var express = require("express")

const app = new express()
var fs=require('fs')

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const cors=require('cors')
app.use(cors())

//get data from file
app.get('/api/json/',(req,res)=>{
    try{
        let value = fs.readFileSync("data.json")
        let json = JSON.parse(value);
        res.send(json)

        // fs.readFile(`${__dirname}/data.json`,(err,data)=>{
        //     if(err){
        //         console.log(err)
        //         return err
        //     }   
       
        //     let json = data.toString()
        //     let users = JSON.parse(json);
        //     res.send(users)
        // })
        
    }
    catch(err){
        res.send("err")
        console.log("Error",err)
    }
})

//get specific item
app.get('/api/json/:id',(req,res)=>{
    try{
        const id =req.params.id

        const mulvalue = fs.readFileSync("data.json")
        const muljson = JSON.parse(mulvalue) 
        const name = muljson.filter((val)=> id==val.course)
        console.log(name)
        res.send(name)
    }catch(err){
        res.send(err)
    }
})

app.post('/api/json',(req,res)=>{
    try{
        const addvalue = fs.readFileSync("data.json")
        var listy = JSON.parse(addvalue) 
        const body=req.body
        listy.push(body)
        
        const text = JSON.stringify(listy)
        console.log(text)
        try{
            fs.writeFileSync("data.json",text)
        }catch(err){
            console.log(err)
            res.send("write error")
        }
        res.send("added successfully")
    }catch(err){
        res.send("Error",err)
    }
})

//update data

app.put('/api/json/:id', (req,res)=>{
    const id=req.params.id
    try{
        const putvalue = fs.readFileSync("data.json")
        var list = JSON.parse(putvalue) 
        console.log(id)
        console.log("list",list)   
        if(id>0 && id<=list.length){
            console.log("hello")
            if(req.body.name){
            list[id-1].name=req.body.name
            }
            if(req.body.age){
            list[id-1].age=req.body.age
            }
            if(req.body.course){
            list[id-1].course=req.body.course
            }
        }
        console.log("list",list)        
        const text =  JSON.stringify(list)
        console.log("texty",text)
        try{
            fs.writeFileSync("data.json",text)
        }catch(err){
            console.log(err)
            res.send("write error")
        }
        res.status(200).send("put successfully")
       
    }catch(err){
        res.send(err)
    }
})
app.delete('/api/json/:id', (req,res)=>{
    const did=req.params.id

    try{
        const deletevalue = fs.readFileSync("data.json")
        var listy = JSON.parse(deletevalue) 
        listy.splice(did-1,1)
        const texty =  JSON.stringify(listy)
       
        try{
            fs.writeFileSync("data.json",texty)
        }catch(err){
            console.log(err)
            res.send("write error")
        }
        res.status(200).send("delete successfully")
       
    }catch(err){
        console.log(err)
    }
})

const port =8080
app.listen(8080,()=>{
    console.log(`Server is running at port : http://localhost:${port}/api/json`);
  
})
