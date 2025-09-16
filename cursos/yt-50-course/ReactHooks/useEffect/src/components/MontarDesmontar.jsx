import { useEffect, useState } from 'react'

const EfectLog = () => {
    useEffect(()=>{
        console.log("Montado")
        return()=>{
            console.log("Desmontado")
        }
    },[])
  return (
    <div>
        <h1>Check the console to see the message!</h1>
    </div>
  )
}

const MontarDesmontar = () => {
    const [show, setShow] = useState(true);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                {show ? "Montado" : "Desmontado"}
            </button>
            {show && <EfectLog/>}
        </div>
    )
}

export default MontarDesmontar