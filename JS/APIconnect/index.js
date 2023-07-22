console.log("make internet connection...")

// fetch("https://catfact.ninja/fact")
//.then( res=> res.json())
// .then(json=> console.log(json))
// .catch(err=>console.log(err))

const network = async ()=>{
    try{
    const data= await  fetch("https://catfact.ninja/fact")
    // const data= await  fetch("http://localhost:8080/api/v1/todo")
    console.log(data)
    const json= await data.json()
    console.log(json)

    document.getElementById("data").innerHTML=json.fact
    
    }
    catch(err){
        console.log(err)
    }
}
network()