import React, { Component } from 'react'
import TodosItems from './TodosItems'
import PropTypes from 'prop-types'

class Todos extends Component {

    render() {
        return this.props.todosList.map((todos) => (
            <TodosItems
                key={Todos.id}
                todos={todos}
                markCompleted={this.props.markCompleted}
                deleteTodoItem={this.props.deleteTodoItem}
            />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;