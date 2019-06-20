import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodosItems extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#41A7A9',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todos.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todos;
        return (
            <div style={this.getStyle()} >
                <p>
                    <input
                        type='checkbox'
                        onChange={this.props.markCompleted.bind(this, id)} />
                    {title}
                    <button
                        style={buttonStyle}
                        onClick={this.props.deleteTodoItem.bind(this, id)}>
                        X
                    </button>
                </p>
            </div>
        )
    }
}

TodosItems.propTypes = {
    todos: PropTypes.object.isRequired
}

const buttonStyle = {
    background: '#C70039',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '20%',
    cursor: 'pointer',
    float: 'right'
}

export default TodosItems