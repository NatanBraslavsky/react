import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from "uuid";
import Title from "./components/Title"

function App(){
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //executa uma função quando o 'tasks' for alterado
  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks(){
      //CHAMAR A API
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', 
      {
        method: 'GET',
      }
      );
      //pegar os dados que ela retorna
      const data = await response.json();
      console.log(data);
      //armazenar/persistir esses dados no state
      setTasks(data);
    }
    fetchTasks();
  }, [])//lista vazia, a função so é executada quando o usuario acaba de acessar o site

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task =>{
      if(task.id == taskId){
        return {...task, isCompleted: !task.isCompleted}
      }

      return task
    })
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit (title, description){
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center item p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App
