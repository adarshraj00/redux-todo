import React from 'react';
import { useSelector } from 'react-redux';
import Input from './components/Input.js';
//import { Counter } from './features/counter/Counter';
import { selectTodolist } from './features/todoSlice.js';
import './App.css';
import TodoItem from './components/TodoItem.js';
function App() {
  const todolist = useSelector(selectTodolist);
  return (
    <div className="App">
      <div className="app_container">   
        {
          todolist.map(todo => {
             return <TodoItem text={todo.text} status={todo.done} id={todo.id}/>
          })
        }
      </div>
      <div style={{width:"80%"}}>
        <Input />
        </div>
    </div>
  );
}

export default App;
