import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className='container list-container'>
      <ul>
        { todos.length === 0
          ? <li><div>No todos yet</div></li>
          : todos.map(todo =>
            <li key={todo.id} >
              <TodoItem todo={todo} deleteTodo={deleteTodo} />
            </li>)
        }
      </ul>
    </div>
  )
}

export default TodoList