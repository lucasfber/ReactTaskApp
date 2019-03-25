import React from "react";

import "./TaskForm.css";

const TodoForm = props => (
  <form className='todoForm' onSubmit={(e) => props.onFormSubmit(e)}>
    <div className='todoInput'>
      <input type="text" placeholder="Add Task..." 
        onChange={props.onInputChange}
        value={props.title}/>
    </div>
    <div className='buttonAdd'>
      <button type="submit">Add Task</button>
    </div>
    
  </form>
);

export default TodoForm;
