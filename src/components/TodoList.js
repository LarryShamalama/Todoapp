import React, { Component } from 'react'
import TodoItem from './';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                Hello from TodoList
            </div>
            <TodoItem />
        )
    }
}
