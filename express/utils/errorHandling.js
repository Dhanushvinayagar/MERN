const someConnection  = (res) =>{
    try{
            const a =1 ;            
            a =100 ;                    //consider some connection error 
            console.log(a);
            return a;
    }catch(err){
        console.log("Error occured in someconnection : ",err);
        throw new Error(err.message);
    }
}

module.exports = someConnection