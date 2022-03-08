import React from 'react'

const TodoForm = ({ addNewTodo }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    addNewTodo(event.target.todo.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='todo' type='text' placeholder='This is the Todo Form'/>
      <button type='submit'>Submit here</button>
    </form>
  )
}

export default TodoForm