import { useEffect, useState } from "react"
import Todo from "./components/Todo";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `Contagem: ${count}`
    console.log("useEffect")
  },[count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>Incrementar</button>
      <Todo/>
    </div>
  )
}

export default App