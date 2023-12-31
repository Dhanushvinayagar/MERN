const mongoose=require("mongoose")

const TodoSchema = new mongoose.Schema({
    title :{
        type: String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true
    }
}) 

module.exports = mongoose.model('TodoSchema',TodoSchema)