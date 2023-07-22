const express = require("express")

const app = new express()

const bodyparser=require('body-parser')
app.use(bodyparser.json())

const {getAllTodoList} = require('./controller/todo')

const {connectDb} = require('./config/db')
connectDb()

app.get('/todo/',getAllTodoList)

const port= 9090
app.listen(port,()=>{
    console.log(`Port connect at http://localhost:9090`)
})