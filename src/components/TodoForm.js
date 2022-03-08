import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const TodoForm = ({ addNewTodo }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    addNewTodo(event.target.todo.value)
  }

  return (
    <div className='container todo-item'>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input name='todo' type='text' placeholder='This is the Todo Form'/>
        <div className='btn-container'>
          <button type='submit'>
            <AiOutlineSend />
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm