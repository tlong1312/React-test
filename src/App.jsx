import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoForm from './components/todo/TodoForm'
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
    
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoForm addNewTodo = {addNewTodo} />
      <TodoData todoList={todoList} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  )  
}

export default App
