import React from 'react';
import "./Task.css";

const Task = (props) => (
    <div className='task'>
        <input type="checkbox" onChange={() => props.onMarkTaskAsDone(props.task.id)}/>
        <p className={props.task.done === true ? 'done': ''}>{props.task.title}</p>
        <button onClick={() => props.onDelete(props.task.id)}>Delete</button>
    </div>
);

export default Task;