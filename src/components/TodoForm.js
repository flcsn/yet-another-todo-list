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
          placeholder='Start here!'
          autoComplete='off'
          autoFocus
          maxLength='40'
        />
        <div className='btn-container'>
          <button type='submit'>
            <div className='icon-container'>
              <AiOutlineSend />
            </div>
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm