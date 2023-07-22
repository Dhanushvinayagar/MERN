var users=[
    {
    id:"id1",
    name:"Dhanush",
    marks:{
        mat:96,
        phy:87,
        chem:81
    },
    cutoff:87
    },
    {
    id:"id2",
    name:"Dinesh",
    marks:{
        mat:80,
        phy:80,
        chem:80
    },
    cutoff:80
    },
    {
    id:"id3",
    name:"Bala",
    marks:{
        mat:85,
        phy:85,
        chem:85
    },
    cutoff:85
    },
    {
    id:"id4",
    name:"Dhileep",
    marks:{
        mat:84,
        phy:84,
        chem:84
    },
    cutoff:84
    }
]
   
console.log(users)

//insert user
const createUser=(newUser)=> {
    users.push(newUser)
}
createUser(
{
    id:"id5",
    name:"Siva",
    marks:{
        mat:80,
        phy:80,
        chem:80
    },
    cutoff:80
}
)

console.log("Inserted Users",users)


//delete user

console.log("Deleted Users")
const deleteUser= (id) =>{
   var data= users.findIndex((user) =>user.id == id)
   delete users[data]
   console.log(users)
   users.splice(data)
   console.log(users)
}
deleteUser("id5")

//sort ascending
var sort=users.sort((a,b)=>a.cutoff-b.cutoff)
console.log("Sorted:",sort)