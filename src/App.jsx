import React, { Component } from "react";

import "./App.css";
import Header from './Header';
import TodoForm from './TaskForm';
import TodoList from "./TaskList";


export default class App extends Component {

  state = {
    title: '',
    tasks: [ 
      {id: 1, title: 'Wash car', done: false},
      {id: 2, title: 'Clean my bedroom', done: false}
    ]
  }

  handleInputChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if(!this.state.title) {
      return;
    }
    const newTask = {
      id: Math.random(),
      title: this.state.title,
      done: false
    };

    this.setState({
      title: '',
      tasks: this.state.tasks.concat([newTask])
    });
  }

  handleDelete = (id) => {
    const tasks = this.state.tasks.filter(todo => todo.id !== id);
    this.setState({tasks: tasks}); 
  } 

  handleMarkAsDone = (id) => {
    let taskToToggle = this.state.tasks.filter(task => task.id === id)[0];
    let index = this.state.tasks.indexOf(taskToToggle);
    const tasks = [...this.state.tasks];
    tasks[index].done = !taskToToggle.done;
    this.setState({ tasks, ...this.state}); 
  }

  render() {
    return (
      <div className='container'>
        <Header message="MyTasks App"/> 
        <TodoForm
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit} 
          title={this.state.title} />
        <TodoList
          onDelete={this.handleDelete} 
          onMarkAsDone={this.handleMarkAsDone}
          tasks={this.state.tasks}/>
      </div>
    );
  }
}
