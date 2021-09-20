import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    todolist:JSON.parse(localStorage.getItem('todolist'))||[],
}// similar to  useState([]) initialization or currrentState = []

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodos: (state, action) => {
            state.todolist.push(action.payload)
            localStorage.setItem('todolist',JSON.stringify(state.todolist))
        },
        statusChange: (state, action) => {
            state.todolist.map(t => {
                console.log(t.id,action.payload);
                if(t.id===action.payload){
                    t.done=!t.done;
                    console.log(t.done);
                }
            })
            localStorage.setItem('todolist',JSON.stringify(state.todolist))
        },
        deleteTodo: (state, action) => {
            state.todolist.map(t => { 
                if(t.id===action.payload){
                    state.todolist.splice(state.todolist.indexOf(t),1);
                }
            })
            localStorage.setItem('todolist',JSON.stringify(state.todolist))
        }
    }
});
export const selectTodolist=state=>state.todos.todolist; 
export const { saveTodos ,statusChange,deleteTodo} = todoSlice.actions
export default todoSlice.reducer