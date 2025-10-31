import React, { useRef, useState } from 'react'
import "../../style/index.css";
import "../../style/AddTask/addTask.css";

const InputAddTask = ({handleChange, addTask}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(title.trim()){
      addTask(title,description)
      setTitle("")
      setDescription("")
      inputFocus();
    }
  }
  const inputFocus = () =>{
    inputRef.current.focus();
  }

  return (
    <div className='containerInputsBtnAddTask'>
      <form onSubmit={handleSubmit}>
        <div className='containerInputsAddTask'>
          <input type="text" spellcheck="false" className='inputAdd inputTitle' placeholder='Título da tarefa' value={title} onChange={(e)=>setTitle(e.target.value)} ref={inputRef} maxLength={50}/>
          <input type="text" spellcheck="false" className='inputAdd inputDescription' placeholder='Descrição' value={description} onChange={(e)=>setDescription(e.target.value)} maxLength={100}/>
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