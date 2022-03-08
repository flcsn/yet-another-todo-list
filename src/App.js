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

  const deleteTodo = (todo) => {
    console.log('removing', todo)
    const newTodos = todos.filter(t => t !== todo)
    console.log('setting new todos to', newTodos)
    setTodos(newTodos)
  }

  return (
    <div className='main-container'>
      <AppTitle />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <TodoForm addNewTodo={addNewTodo} />
    </div>
  )
}

export default App