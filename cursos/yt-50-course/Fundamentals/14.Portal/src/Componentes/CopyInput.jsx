import React, { useState } from 'react'
import PopUp from './PopUp';

const CopyInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);
  const copiedContent = () => {
    navigator.clipboard.writeText(inputValue).then(()=>{
      setCopied(true)
      setTimeout(()=>{
        setCopied(false)
      },3000)
    })
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={copiedContent}>Copy Text</button>
      <PopUp copied={copied} />
    </div>
  )
}

export default CopyInput