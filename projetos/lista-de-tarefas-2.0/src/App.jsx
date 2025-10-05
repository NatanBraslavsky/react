import { useState } from 'react';
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'
import './style/index.css'

const App = () => {
  const [task, setTask] = useState([]);
  const addTask = (title, description) =>{
    const id = Math.random()
    const newTask = {
      id: id,
      title,
      description
    }
    setTask([...task, newTask]);
  }
  return (
    <div className='mainContainerTask'>
      <h3 className='taskTitleText'>Tarefas</h3>
      <ShowTask task={task}/>
      <AddTask addTask={addTask}/>
    </div>
  )
}

export default App