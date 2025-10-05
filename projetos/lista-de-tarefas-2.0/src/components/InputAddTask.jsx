import React, { useState } from 'react'
import "../style/index.css";
import "../style/addTask.css";

const InputAddTask = ({handleChange, addTask}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () =>{
    if(title.trim()){
      addTask(title,description)
      setTitle("")
      setDescription("")
    }
  }

  return (
    <div className='containerInputsBtnAddTask'>
      <div className='containerInputsAddTask'>
        <input type="text" className='inputAdd inputTitle' placeholder='Título da tarefa' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" className='inputAdd inputDescription' placeholder='Descrição' value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </div>
      <div className='containerBtnsAddTask'>
        <button onClick={handleChange} className='button btnCancel'>Cancelar</button>
        <button className='button AddTaskBtn' onClick={handleSubmit}>Adicionar Tarefa</button>
      </div>
    </div>
  )
}

export default InputAddTask