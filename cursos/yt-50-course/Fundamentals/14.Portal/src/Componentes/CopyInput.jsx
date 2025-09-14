import React, { useState } from 'react'
import PopUp from './PopUp'

const CopyInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);
  const handleCopied = () =>{
    navigator.clipboard.writeText(inputValue).then(()=>{
      setCopied(true)
      setTimeout(()=>{
        setCopied(false)
      },1000)
    })
  }
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={handleCopied}>Copiar</button>
      <PopUp copied={copied}/>
    </div>
  )
}

export default CopyInput