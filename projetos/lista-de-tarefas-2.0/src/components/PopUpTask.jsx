import React from 'react'
import '../style/popUp.css'
import { TfiClose } from 'react-icons/tfi'

const PopUpTask = () => {
  return (
    <div className='popUpContainer'>
        <p>Tarefa adicionada</p>
        <TfiClose className='iconClose'/>
    </div>
  )
}

export default PopUpTask