import React from 'react'

const TodoItem = ({ todo, deleteTodo }) => {
  const handleClick = (event) => {
    event.target.classList.toggle('strikethrough')
  }

  const handleDelete = (event) => {
    event.preventDefault()
    deleteTodo(todo)
  }

  return (
    <div className='todo-item'>
      <div className='todo-name' onClick={handleClick}>
        {todo.name}
      </div>
      <div className='btn-container'>
        <button onClick={(event) => handleDelete(event)}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default TodoItem