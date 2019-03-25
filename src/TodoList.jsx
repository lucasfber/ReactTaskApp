import React from "react";

import Todo from './Todo';
import './TodoList.css';

const TodoList = (props) => {
  return (
    <div className='todoList'>
      <ol>
        {props.todos.map(todo => (
          <li key={todo.id}>
            <Todo
            onDelete={props.onDelete} 
            onMarkTodoAsDone={props.onMarkAsDone}
            todo={todo} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;