import React from 'react'

const TodoItem = ({ todo, deleteTodo }) => {
  const handleClick = (event) => {
    event.preventDefault()
    console.log('clicked!', todo)
    deleteTodo(todo)
  }
  return (
    <div className='todo-item'>
      <div>
        {todo}
      </div>
      <div className='delete-btn'>
        <button onClick={(event) => handleClick(event)}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default TodoItem