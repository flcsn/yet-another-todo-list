import React from 'react'

const TodoForm = ({ addNewTodo }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    addNewTodo(event.target.todo.value)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input name='todo' type='text' placeholder='This is the Todo Form'/>
        <button type='submit'>Submit here</button>
      </form>
    </div>
  )
}

export default TodoForm