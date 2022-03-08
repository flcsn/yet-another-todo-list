import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const TodoForm = ({ addNewTodo }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewTodo(input)
    setInput('')
  }

  return (
    <div className='container todo-item'>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input
          name='todo'
          type='text'
          value={input}
          onChange={({ target }) => setInput(target.value)}
          placeholder='Type your todos here!'
          autoComplete='off'
          autoFocus
        />
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