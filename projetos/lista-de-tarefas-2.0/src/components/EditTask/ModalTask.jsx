import { useState } from 'react'
import '../../style/EditTask/editTask.css'
import { GoInbox } from 'react-icons/go';
import { GrFormClose } from 'react-icons/gr';

const ModalTask = ({task, setSelectedTask, editTask}) => {

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleClose = (e) => {
    if(e.target === e.currentTarget){
      setSelectedTask(null)
    }
  }
  const handleSave = () => {
    if(title.trim()){
      editTask(task.id, {
        title: title,
        description: description
      })
      setSelectedTask(null);
    }
  }

  return (
    <div className="modalShowTaskContainer" onClick={handleClose}>
      
      <div className='cardShowTask'>
        <div className='topLine'>
          <div className='containerIconeEdit'>
            <GoInbox className='iconFaInbox'/>
            <p className='txtEditFain'>Editar</p>
          </div>
          <div onClick={() => setSelectedTask(null)}>
            <GrFormClose className='iconCloseEditTask' />
          </div>
        </div>
        <div className="containerInputsBtnsEditTask">
          <div className='containerTitleDescEditTask'>
            <input type="text" value={title} className='titleEditTaskInput' placeholder='Nome da tarefa' maxLength={50} onChange={(e) => setTitle(e.target.value)}/>
            <textarea type="text" value={description} className='descriptionEditTaskInput' placeholder='Descrição' maxLength={100} onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div className='containerBtns'>
            <button className='btnEditTask btnCancel' onClick={handleClose}>Cancelar</button>
            <button className='btnEditTask btnSave' onClick={handleSave}>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalTask 