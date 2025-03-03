import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoForm from './components/todo/TodoForm'
import reactLogo from './assets/react.svg';

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoForm />
      <TodoData />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  )  
}

export default App
