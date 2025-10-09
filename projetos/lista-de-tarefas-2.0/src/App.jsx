import { useRef, useState } from 'react';
import AddTask from './components/AddTask/AddTask'
import ShowTask from './components/ShowTask/ShowTask'
import './style/index.css';
import PopUpTask from './components/popUpTask';
import EditOptions from './components/ShowTask/editOptions';

const App = () => {
  const [task, setTask] = useState([]);
  const [addTaskShowPop, setAddTaskShowPop] = useState(false);
  const timeoutRef = useRef(null);

  const addTask = (title, description) =>{

    const id = Math.random()
    const newTask = {
      id: id,
      title,
      description
    }

    setTask([...task, newTask]);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setAddTaskShowPop(true);

    timeoutRef.current = setTimeout(() => {
      setAddTaskShowPop(false);
      timeoutRef.current = null;
    }, 2000);
  }

  return (
    <div className='containerMaxW'>
      <div className='mainContainerTask'>
        <h3 className='taskTitleText'>Tarefas</h3>
        <ShowTask task={task}/>
        <AddTask addTask={addTask}/>
        <PopUpTask addTaskShowPop={addTaskShowPop}/>
        <EditOptions/>
      </div>
    </div>
  )
}

export default App