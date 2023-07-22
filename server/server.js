var express = require("express")
// var fs=require('fs')
const app = new express()

const list=[{
    "id":1,
    "name":"dhanush",
    "age":20,
    "course":"express"
},
{
    "id":2,
    "name":"dinesh",
    "age":20,
    "course":"express"
},
{
    "id":3,
    "name":"gokul",
    "age":20,
    "course":"node"
}]

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const cors=require('cors')
app.use(cors())


app.get('/api/v1/todo',(req,res)=>
{   
    console.log(list)
    res.send(list)
})
app.get('/api/v1/todo/:id',(req,res)=>
{   
    const id=req.params.id
    const name=list.filter((val)=> id==val.course)
    console.log(name)
    res.status(200).send(name)
    // -------------using id------------
    // if(id>=0 && id<=list.length){
    //     res.status(200).send(list[id-1])
    // }else{
    //     res.status(404).send("error")
    // }
})

app.post('/api/v1/todo',(req,res)=>{
    console.log(req.body)
    list.push(req.body)
    res.send(list)
})

app.put('/api/v1/todo/:id',(req,res)=>{
    const id =req.params.id
    if(id>=0 && id<=list.length){
        if(req.body.name){
        list[id-1].name=req.body.name
        }
        if(req.body.age){
        list[id-1].age=req.body.age
        }
        if(req.body.course){
        list[id-1].course=req.body.course
        }
        res.send(list)
    }else{
        res.send("error")
    }
})
app.delete('/api/v1/todo/:id',(req,res)=>{
    const id = req.params.id
    list.splice(id-1,1)
    res.send(list)
})

const port =8080
app.listen(8080,
    console.log(`Server is running at port : http://localhost:${port}`)
)