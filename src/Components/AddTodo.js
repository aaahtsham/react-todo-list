import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: '',
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
   
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
 
    render() {
        return (

            <form onSubmit ={this.onSubmit}  style={{ display: 'flex', padding: '15px' }}>
                <input
                    type='text'
                    name='title'
                    placeholder='Add Todo...'
                    style={{ flex: '10' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <input
                    type='submit'
                    value='Submit'
                    style={{
                        flex: '1',
                        background: '#A4BA00',
                        display: 'inline-block',
                        borderRadius: '10%',
                        border: 'none',
                        color: '#fff',
                        padding: '7px 20px',
                        cursor: 'pointer'
                    }}
                />

            </form>

        )
    }
}

export default AddTodo
