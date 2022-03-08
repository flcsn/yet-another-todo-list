import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className='container'>
      <ul>
        { todos.length === 0
          ? <div>No todos yet</div>
          : todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)
        }
      </ul>
    </div>
  )
}

export default TodoList