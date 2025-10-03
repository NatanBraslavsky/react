import React from 'react'
import "../style/index.css";
import "../style/addTask.css";

const InputAddTask = ({handleChange}) => {
  return (
    <div className='containerInputsBtnAddTask'>
      <div className='containerInputsAddTask'>
        <input type="text" className='inputAdd inputTitle' placeholder='Título da tarefa'/>
        <input type="text" className='inputAdd inputDescription' placeholder='Descrição'/>
      </div>
      <div className='containerBtnsAddTask'>
        <button onClick={handleChange} className='button btnCancel'>Cancelar</button>
        <button className='button AddTaskBtn'>Adicionar Tarefa</button>
      </div>
    </div>
  )
}

export default InputAddTask