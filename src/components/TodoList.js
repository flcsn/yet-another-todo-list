import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
  return (
    <div className='container'>
      <ul>
        { todos.length === 0
          ? <div>No todos yet</div>
          : todos.map(todo => <TodoItem key={todo} todo={todo} />)}
      </ul>
    </div>
  )
}

export default TodoList