import React from 'react'
import AddTask from './components/AddTask'
import './style/index.css'

const App = () => {
  return (
    <div className='mainContainerTask'>
      <h3 className='taskTitleText'>Tarefas</h3>
      <AddTask/>
    </div>
  )
}

export default App