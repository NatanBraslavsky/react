import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";
import Todo from "./components/Todo";

const App = () => {
  // const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   document.title = `Contagem: ${count}`
  //   console.log("useEffect")
  // },[count])
  return (
    <div>
      {/* <p>{count}</p> */}
      {/* <button onClick={()=>setCount(count + 1)}>Incrementar</button> */}
      {/* <Todo/> */}
      <BasicEffect/>
      <CounterEffect/>
      <FetchDataEffect/>
    </div>
  )
}

export default App