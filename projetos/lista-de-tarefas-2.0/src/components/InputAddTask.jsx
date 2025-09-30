import React from 'react'

const InputAddTask = ({handleChange}) => {
  return (
    <div>
        <input type="text" />
        <input type="text" />
        <button onClick={handleChange}>Cancelar</button>
    </div>
  )
}

export default InputAddTask