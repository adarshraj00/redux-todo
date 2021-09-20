import React from 'react'
import './input.css'
import { useDispatch } from 'react-redux'
// 
import { useEffect,useRef } from 'react'
import { saveTodos } from '../features/todoSlice'

const Input = () => {
    const [input,setInput] = React.useState('')
    const dispatch = useDispatch()
    const inputref = useRef(null)
    const addTodo=()=>{
        console.log(input);
        dispatch(saveTodos({
            text:input,
            done:false,
            id:Date.now()
        }))
    }
    useEffect(()=>{
        inputref.current.focus()
    },[])
    return (
        <div className='input'>
            <input ref={inputref} type="text" placeholder="add todo here" value={input}  onChange={e=>setInput(e.target.value)}/>
            <button style={{color:"white"}} onClick={addTodo} disabled={!input.length>0} >Add</button>
        </div>  
    )
}

export default Input
