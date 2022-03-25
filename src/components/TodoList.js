import React from "react";
//import component
import Todo from "./Todo";


const TodoList = (props) =>{


    return(
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map(todo =>(
                    <Todo todo={todo} todos={props.todos} setTodos={props.setTodos} key={todo.id} text={todo.text} id={todo.id}/>
                ))}
            </ul>
        </div>
        
    );
}


export default TodoList;