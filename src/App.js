import React from 'react';
import Todos from './Components/Todos'
import Header from './Components/layouts/Header'
import AddTodo from './Components/AddTodo'
import uuid from 'uuid';
import './App.css';

class App extends React.Component {

  state = {
    todosList: [
      //      {        id: uuid.v4(), title: "ABCD", completed: false     }
    ]
  }

  //toggle complete

  markCompleted(id) {
    this.setState({
      todosList: this.state.todosList.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  //delete
  deleteTodoItem(id) {
    this.setState({
      todosList: [...this.state.todosList.filter(todo => todo.id !== id)]
    });
  }

  //addTodo
  addTodo(title) {

    const newTodosList = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({
      todosList: [...this.state.todosList, newTodosList]
    });
  }

  render() {
    return (
      <div className='container'>
        <Header />

        <AddTodo addTodo={this.addTodo.bind(this)} />

        <Todos
          todosList={this.state.todosList}
          markCompleted={this.markCompleted.bind(this)}
          deleteTodoItem={this.deleteTodoItem.bind(this)}

        />
      </div>
    );
  }
}

export default App;