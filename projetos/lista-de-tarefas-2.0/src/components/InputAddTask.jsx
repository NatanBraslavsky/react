import React, { useState } from 'react'
import "../style/index.css";
import "../style/addTask.css";

const InputAddTask = ({handleChange, addTask}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(title.trim()){
      addTask(title,description)
      setTitle("")
      setDescription("")
    }
  }

  return (
    <div className='containerInputsBtnAddTask'>
      <form onSubmit={handleSubmit}>
        <div className='containerInputsAddTask'>
          <input type="text" className='inputAdd inputTitle' placeholder='Título da tarefa' value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <input type="text" className='inputAdd inputDescription' placeholder='Descrição' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div className='containerBtnsAddTask'>
          <button onClick={handleChange} className='button btnCancel' type='button'>Cancelar</button>
          <button className='button AddTaskBtn' type='submit'>Adicionar Tarefa</button>
        </div>
      </form>
    </div>
  )
}

export default InputAddTask