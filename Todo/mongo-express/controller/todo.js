const Todo = require('../model/todo')

exports.getAllTodoList = async(req,res)=>{
    try{
        const List = await Todo.find()
        console.log(List)
        return res.status(200).json({
                data:List,
                length:List.length
        })
    }catch(err){
        res.status(500).json({
            msg:'Internal server error'
        })
        console.log(err)
    }
}