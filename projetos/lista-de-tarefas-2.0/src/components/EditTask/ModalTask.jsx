import { useState } from 'react'
import '../../style/EditTask/editTask.css'
import { GoInbox } from 'react-icons/go';

const ModalTask = ({task, setSelectedTask}) => {

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleClose = (e) => {
    if(e.target === e.currentTarget){
      setSelectedTask(null)
    }
  }

  return (
    <div className="modalShowTaskContainer" onClick={handleClose}>
      
      <div className='cardShowTask'>
        <div className='topLine'>
          <GoInbox className='iconFaInbox'/>
          <p className='txtEditFain'>Editar</p>
        </div>
        <div className="containerInputsBtnsEditTask">
          <div className='containerTitleDescEditTask'>
            <input type="text" value={title} className='titleEditTaskInput' placeholder='Nome da tarefa'/>
            <textarea type="text" value={description} className='descriptionEditTaskInput' placeholder='Descrição'/>
          </div>
          <div className='containerBtns'>
            <button className='btnEditTask btnCancel' onClick={handleClose}>Cancelar</button>
            <button className='btnEditTask btnSave'>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalTask 