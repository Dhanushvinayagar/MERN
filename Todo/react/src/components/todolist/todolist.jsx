import { useEffect, useState } from "react"
import TodoListItem from "./item/item"
import './todolist.css'
import NewItem from "../newitems/newitem"
import { nanoid } from "nanoid"

const Listy =[ {
    "id":nanoid(),
    "title":"Javascript",
    "priority":"high"
},
{
    "id":nanoid(),
    "title":"UI",
    "priority":"medium"
},{
    "id":nanoid(),
    "title":"UX",
    "priority":"low"
}]

const TodoList = () =>{
    
    const [List,setList]=useState(Listy)

    useEffect(()=>{
        fetch("")
    })

    const deleteItem = (id)=>{
        const filterlist = List.filter((item)=> item.id!=id)
        setList([...filterlist])
    }

    const addItem = (item) =>{
        setList((prev)=>[item,...prev])
    }

    // const editItem = (id) =>{
    //     const filterlist = List.filter((item)=> item.id==id)
    //     setList([...filterlist])
    // }

    const length = List.length
   
    if(length>0)
    return (
        <>
        <NewItem addItem={addItem} />
        <div className="todolist">  
        { 
           List.map((item,key)=>(
                 <TodoListItem 
                        key={key} 
                        item={item}
                        index={key}
                        onDelete={deleteItem} 
                />)
            ) 
        }    
        </div>
        </>
    )
    
    return(
        <>
            <NewItem />
            <div className="no-items">No task todo</div>
            </>
        )
    
}

export default TodoList