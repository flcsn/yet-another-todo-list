import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <div className='todo-item'>
      <div>
        {todo}
      </div>
      <div>
        <button>
          &times;
        </button>
      </div>
    </div>
  )
}

export default TodoItem