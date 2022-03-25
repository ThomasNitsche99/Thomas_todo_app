import React from "react";


const Form = (props) =>{
    //here i can write code and funtion

    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        props.setInputText(e.target.value);
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        props.setTodos([...props.todos, {text: props.inputText, completed: false, id: Math.random()*1000 }])
        props.setInputText("");
    }

    const statusHandler = (e) =>{
        console.log(e.target.value);
        props.setStatus(e.target.value);
    }


    return(
        <form>
            <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
      </div>
    </form>
    );
}


export default Form;