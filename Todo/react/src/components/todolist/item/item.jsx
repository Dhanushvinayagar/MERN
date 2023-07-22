import './item.css'
import img from "./checkbox.png"
import { useState } from 'react'

const TodoListItem = (props) =>{
   
    const {item:{id,title,priority},index,onDelete}=props

    const [isChecked,setChecked]=useState(false)
    
    return(
     <> 
        <div className={`item ${priority}`}>
            {isChecked ?
             (<span className='selcted-checkbox' onClick={()=>setChecked(false)}><img src={img} alt="no img" /></span>) 
             :  (<span className='checkbox' onClick={()=>setChecked(true)}/>)}
         
            <div className={`title ${isChecked}`}>{title}</div>
            

            <div className={`priority ${priority}`}>{priority}</div>
            <span className="material-symbols-outlined">
                edit
            </span>
            <span className="material-symbols-outlined"  onClick={()=>{onDelete(id)}}>
                delete
            </span>
        </div>

    </>
    )
    // return(
    //     <> 
    //     <div className={`item ${props.item.priority}`}>
    //         {props.item.title}
    //     </div>
    //     </>
    // )
}

export default TodoListItem