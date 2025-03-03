import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoForm from './components/todo/TodoForm'
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Learning React",
    },
    {
      id: 2,
      name: "Learning Spring boot",
    }
  ])

  const name = "Long";
  const age = 20;
  const data = {
    address: "HCM",
    country: "Vietnam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoForm addNewTodo = {addNewTodo} />
      <TodoData 
        name={name}
        age={age}
        data={data} 
        todoList={todoList}       
      />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  )  
}

export default App
