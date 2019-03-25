import React from 'react';
import "./Todo.css";

const Todo = (props) => (
    <div className='todo'>
        <input type="checkbox" onChange={() => props.onMarkTodoAsDone(props.todo.id)}/>
        <p className={props.todo.done === true ? 'done': ''}>{props.todo.title}</p>
        <button onClick={() => props.onDelete(props.todo.id)}>Delete</button>
    </div>
);

export default Todo;