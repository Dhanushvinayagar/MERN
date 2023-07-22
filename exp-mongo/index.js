const express = require("express")

const app = express()
app.use(express.json())

const mongoose = require("mongoose")

const db = async() =>{
    try {
        const url = 'mongodb://127.0.0.1:27017/bettertom'
        const promise = await mongoose.connect(url, {
            useNewUrlParser:true,useUnifiedTopology: true
        })
        
      } catch (error) {
        console.log(error);
      }
}
db()

const success =mongoose.connection.on('open', () => {
    console.log('connected...')
})

const doda = new mongoose.Schema({
        id : {
            type: Number,
            required : true
        },
        fullname:{
                type:String,
                required : true
        },
        age : {
            type: Number,
            required : true
        },
        course:{
            type:String,
            required : true
    }
})
const DoData = mongoose.model('DoData',doda)

app.get('/',async (req,res)=>{
    try{
        const datas= await DoData.find()
        res.send(datas)
    }catch(err){
        console.log(error)
        res.send("error")
    }
})

app.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

app.post('/',async(req,res)=>{
    try{
        console.log(req.body)
        const dataes = new DoData({
            id:req.body.id,
            fullname: req.body.fullname,
            age: req.body.age,
            course: req.body.course
        })
    
        
        const a1 =  await dataes.save() 
        res.json(a1)
        
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

const port=8008
app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})