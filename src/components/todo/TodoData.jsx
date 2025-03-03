
const TodoData = (props) => {
   
    const {name} = props

    // console.log(">>> check props", props)
    return (
        <div className="todo-data">
            <div>My name is a {name}</div>
            <div>Learning React </div>
            <div>Learning Spring boot </div>
        </div>
    )
}

export default TodoData