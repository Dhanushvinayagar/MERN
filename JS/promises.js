const promise = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve("foo")
    // },2000)
    let x=1;
    if(x==0){
        resolve("resolve")
    }else{
        reject("error occured")
    }
}
)
promise.then(
    (res)=>{
            console.log(res)
    }
).catch(
    (err)=>{
        console.log("err :",err)
    }
).finally(
    ()=>console.log("executed")
)
console.log("end")


//execution of async
setTimeout(()=>{
    console.log("Set-timeout")
},0)
console.log("ended")

