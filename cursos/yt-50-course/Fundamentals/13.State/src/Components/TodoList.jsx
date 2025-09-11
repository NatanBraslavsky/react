import { useState } from 'react'

const TodoList = () => {
  const [lista, setLista] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if(inputValue.trim()){
      setLista([...lista, inputValue])
      setInputValue("");
    }
  }

  const handleSubmit = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" placeholder='Digite' value={inputValue} onChange={handleSubmit}/>
        <button>Adicionar</button>
      </form>
      <ul style={{padding: '0'}}>
        {lista.map((item, index) =>
          <li key={index} style={{listStyle: "none"}}>{item}</li>
        )}
      </ul>
    </div>
  )
}

export default TodoList