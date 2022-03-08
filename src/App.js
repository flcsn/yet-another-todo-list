import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AppTitle from './components/AppTitle'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([])

  const addNewTodo = (todo) => {
    const todoObj = {
      id: uuidv4(),
      name: todo
    }
    console.log('adding', todoObj)
    const newTodos = todos.concat(todoObj)
    setTodos(newTodos)
  }

  const deleteTodo = (todo) => {
    console.log('removing', todo)
    const newTodos = todos.filter(t => t.id !== todo.id)
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