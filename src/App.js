import React, { useState } from 'react'

import AppTitle from './components/AppTitle'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([])

  const addNewTodo = (todo) => {
    const newTodos = todos.concat(todo)
    setTodos(newTodos)
  }

  return (
    <div>
      <AppTitle />
      <TodoList todos={todos} />
      <TodoForm addNewTodo={addNewTodo} />
    </div>
  )
}

export default App