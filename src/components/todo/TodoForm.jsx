import { useState } from "react"

const TodoForm = (props) => {

    // const valueInput = "long";
    const [valueInput, setValueInput] = useState("eric")
    // const {addNewTodo} = props;

    // addNewTodo("Long");
    const handleClick = () => {
        console.log("check value input", valueInput)
    }

    const handleChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className="todo-form">
            <input type="text" placeholder="Add new todo" 
                onChange={(event) => handleChange(event.target.value)}
            />
            <button style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
            <div>
                My text in put is = {valueInput}
            </div>
        </div>
    )
}

export default TodoForm;