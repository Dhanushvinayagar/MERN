import { useState } from 'react'
import './newitem.css'
import { nanoid } from 'nanoid'

const NewItem = (props) =>{
    const id = nanoid()
    const {addItem}=props
    
    const [title,setTitle]=useState('')
    const [prior,setPrior]=useState('')
    
    const handleInputChange = (e) =>{
        setTitle(e.target.value)
    }
    const setClear = () =>{
        setTitle('')
        setPriority('')
    }
    const setPriority =(val)=>{
        setPrior(val)
        
    }
    const setSave = () =>{ 
        if(!title || title==" "){
            return
        }
        const obj ={
            id,
            title,
            priority:prior
        }
        addItem(obj)
        setTitle('')
    }
    
    return(
        <div className="newitem">
            <div className="newcheckbox" />
            <div className="additem">
                <input className='itemtext' type="text" onChange={handleInputChange} value={title} placeholder='New item'/>
                {title && (
                <>
                <div className="badger">
                    <button className="badger-1"  onClick={() => setPriority("high") }>High</button>
                    <button className="badger-2"  onClick={() => setPriority("medium")} >Medium</button>
                    <button className="badger-3" onClick={() => setPriority("low")}>Low</button>
                </div>
                <div className="btn-container">
                    <button className='save' onClick={()=>setSave()}>
                            Save
                    </button>
                    <button className='clear' onClick={()=>setClear()}>
                            Clear
                    </button>
                </div>
                </>
                )}
            
            </div>
        </div>
    )
}

export default NewItem