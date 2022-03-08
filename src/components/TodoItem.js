import React from 'react'

const TodoItem = ({ todo, deleteTodo }) => {
  const handleClick = (event) => {
    event.preventDefault()
    deleteTodo(todo)
  }
  return (
    <div className='todo-item'>
      <div>
        {todo.name}
      </div>
      <div className='btn-container'>
        <button onClick={(event) => handleClick(event)}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default TodoItem