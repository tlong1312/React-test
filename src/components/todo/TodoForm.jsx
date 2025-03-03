
const TodoForm = (props) => {

    console.log(props)
    // const {addNewTodo} = props;

    // addNewTodo("Long");
    const handleClick = () => {
        alert("click me")
    }

    const handleChange = (name) => {
        console.log("handle change", name)
    }
    return (
        <div className="todo-form">
            <input type="text" placeholder="Add new todo" 
                onChange={(event) => handleChange(event.target.value)}
            />
            <button style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoForm;