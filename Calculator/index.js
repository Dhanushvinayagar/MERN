const msg=(val)=>{
    const arr=val.split("");
    let str1="",str2="";
    var c=0;
    let p;
    arr.forEach(e => {
        if(e=="*" || e=="+" || e=="-" || e=="/" || e=="%"){
            c=1;
            p=e;
        }
        else if(c==0){
            str1=str1+e;
        }
        else{
            str2=str2+e;
        }
    });
    console.log(str1)
    console.log(str2)
    
    // arr.forEach(el => {
    //   let li = document.createElement("li");
    //   li.innerText = el;
    //   document.getElementById("array").appendChild(li);
    // });
    let str=val+"=";
    document.getElementById("array").innerHTML=str;

    if(p=="+"){
        document.getElementById("ans").innerHTML=parseFloat(str1)+parseFloat(str2);
    }
    else if(p=="-"){
        document.getElementById("ans").innerHTML=parseFloat(str1)-parseFloat(str2);
    }
    else if(p=="*"){
        document.getElementById("ans").innerHTML=parseFloat(str1)*parseFloat(str2);
    }
    else if (p=="/"){
        document.getElementById("ans").innerHTML=parseFloat(str1)/parseFloat(str2);
    }
    else if (p=="%"){
        document.getElementById("ans").innerHTML=parseFloat(str1)%parseFloat(str2);
    }
    else{
        let str="Enter proper equation";
        
       document.getElementById("ans").innerHTML=str;
    }
   
}