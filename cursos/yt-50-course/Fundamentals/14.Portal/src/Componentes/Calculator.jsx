import React, { useState } from 'react'

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [soma, setSoma] = useState(0);
    const randleSubmit = () =>{
        const soma = Number(num1) + Number(num2)
        setSoma(soma)
    }
  return (
    <div>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
        <button onClick={randleSubmit}>Somar</button>
        <div>
            Resultado: {soma}
        </div>
    </div>
  )
}

export default Calculator