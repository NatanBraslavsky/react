import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'
import './style/index.css'

const App = () => {
  return (
    <div className='mainContainerTask'>
      <h3 className='taskTitleText'>Tarefas</h3>
      <ShowTask/>
      <AddTask/>
    </div>
  )
}

export default App