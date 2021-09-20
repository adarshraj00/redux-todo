import React from 'react'
import { statusChange,deleteTodo } from '../features/todoSlice'
import { useDispatch } from 'react-redux'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './TodoItem.css'
const TodoItem = ({text,status,id}) => {
    let item={
       border:"1px solid #e0e0e0",
       margin:"10px",
       padding:"10px",
       borderRadius:"5px",
       backgroundColor:"#f8f8f8",
    }
    const dispatch = useDispatch()
    return (
        <div style={item}>
            <input type="checkbox" checked={status} onChange={(event) => dispatch(statusChange(id))} />
            <span style={{marginLeft:"10px",wordWrap:"break-word"}} className={status && "cross" }>{text}</span>
            <HighlightOffIcon style={{position:"relative",float:"left"}} onClick={()=>dispatch(deleteTodo(id))}/>
        </div>
    )
}

export default TodoItem
