import React, { useState } from 'react'

const TodoList = () => {
  const [lista, setLista] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSubmite = (e) =>{
    e.preventDefault()
    if(inputValue.trim()){
      setLista([...lista, inputValue])
      setInputValue("");
    }
  }
  const handleInput = (e) =>{
    setInputValue(e.target.value)
  }
  return (
    <div>
      <form action="post" onSubmit={handleSubmite}>
        <input type="text" placeholder='Digite' value={inputValue} onChange={handleInput}/>
        <button>Adicionar</button>
      </form>
      <div>
        <ul>
          {lista.map((valor, index)=>
            <li key={index}>{valor}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default TodoList