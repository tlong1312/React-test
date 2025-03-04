import './todo.css'
import TodoData from './TodoData'
import TodoForm from './TodoForm'
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';
const TodoApp = () => {
    const [todoList, setTodoList] = useState([])
  
    const addNewTodo = (name) => {
      const newTodo = {
        id: randomIntFromInterval(1, 10000000),
        name: name
      }
      setTodoList([...todoList, newTodo])
      
    }
  
    const deleteTodo = (id) => {
      const deletedTodo = todoList.filter((item) => item.id !== id)
      setTodoList(deletedTodo)
    }
  
    const randomIntFromInterval = (min, max) => { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    return (
      <div className="todo-container">
          <div className="todo-title">Todo List</div>
          <TodoForm addNewTodo = {addNewTodo} />
          
  
          {todoList.length === 0 ?
            <div className="todo-image">
              <img className="logo" src={reactLogo} />
            </div>
            :
            <TodoData todoList={todoList} deleteTodo={deleteTodo}/>
          }
          
        </div>
    )
  }

  export default TodoApp;