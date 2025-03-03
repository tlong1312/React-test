import { useState } from "react"

const TodoForm = (props) => {

    const [valueInput, setValueInput] = useState("eric")
    const {addNewTodo} = props;

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    const handleChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className="todo-form">
            <input type="text" placeholder="Add new todo" 
                onChange={(event) => handleChange(event.target.value)}
                value={valueInput}
            />
            <button style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoForm;