import React from "react";

import Task from './Task';
import './TaskList.css';

const TodoList = (props) => {
  return (
    <div className='todoList'>
      <ol>
        {props.tasks.map(task => (
          <li key={task.id}>
            <Task
            onDelete={props.onDelete} 
            onMarkTaskAsDone={props.onMarkAsDone}
            task={task} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;