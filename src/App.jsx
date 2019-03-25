import React, { Component } from "react";

import "./App.css";
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from "./TodoList";


export default class App extends Component {

  state = {
    title: '',
    todos: [ 
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
    const newTodo = {
      id: Math.random(),
      title: this.state.title,
      done: false
    };

    this.setState({
      title: '',
      todos: this.state.todos.concat([newTodo])
    });
  }

  handleDelete = (id) => {
    console.log(id);
    console.log(this.state.todos);
    const todos = this.state.todos.filter(todo => todo.id !== id);
    console.log(todos);
    this.setState({todos: todos}); 
  } 

  handleMarkAsDone = (id) => {
    /* Percorrer o array de Tarefas 
       pegar a tarefa com o id igual ao que estamos passando
       alternar o estado de concluido (se false, true; se true, false)
       atualizar o estado
    */
    let todoToToggle = this.state.todos.filter(todo => todo.id === id)[0];
    let index = this.state.todos.indexOf(todoToToggle);
    const newTodosArray = [...this.state.todos];
    newTodosArray[index].done = !todoToToggle.done;
    this.setState({ todos: newTodosArray, ...this.state}); 
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
          todos={this.state.todos}/>
      </div>
    );
  }
}
