import React from 'react'

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        { todos.length === 0
          ? <div>No todos yet</div>
          : todos.map(todo => <li key={todo}>{todo}</li>)}
      </ul>
    </div>
  )
}

export default TodoList