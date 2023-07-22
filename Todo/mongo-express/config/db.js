const mongoose = require("mongoose");

exports.connectDb = async() =>{
    try {
        const url = 'mongodb://127.0.0.1:27017/Todo'
        const promise = await mongoose.connect(url, {
            useNewUrlParser:true,useUnifiedTopology: true
        })
        // console.log(promise)
        console.log("db connected...")
        
      } catch (error) {
        console.log(error);
      }
}
