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
        <input type="text" value={title}/>
        <input type="text" value={description}/>
      </div>
    </div>
  )
}

export default ModalTask 