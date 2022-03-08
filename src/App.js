import React from 'react'

import AppTitle from './components/AppTitle'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const App = () => {
  return (
    <div>
      <AppTitle />
      <TodoList />
      <TodoForm />
    </div>
  )
}

export default App