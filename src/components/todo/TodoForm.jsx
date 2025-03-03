
const TodoForm = (props) => {

    console.log(props)
    // const {addNewTodo} = props;

    // addNewTodo("Long");
    return (
        <div className="todo-form">
            <input type="text" placeholder="Add new todo" />
            <button>Add</button>
        </div>
    )
}

export default TodoForm;