import React, { useState } from 'react'

const FunctionUseState = () => {
    const [count, setCount] = useState(()=>{
        const inicial = 10;
        return inicial
    })
    const increment = () => {
        setCount((prev)=>prev+1)
    }
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default FunctionUseState