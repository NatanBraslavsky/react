import { useReducer } from 'react'

const reducer = (state, action) =>{
  switch(action.type){
    case "Increment":
      return {...state, count: state.count + 1};
    case "ShowText":
      return {...state, showInfo: !state.showInfo}
    default:
      return "This Action doens't exist"
  }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {
      count: 0,
      showInfo: true,
    });
  // const [count, setCount] = useState(0);
  // const [showInfo, setShowInfo] = useState(false);
  const handleClick = () =>{
    dispatch({type: 'Increment'})
    dispatch({type: 'ShowText'})
    // setCount(count+1)
    // setShowInfo(!showInfo)
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>Increment</button>
      {state.showInfo && <p>Seja bem vindo! Teste.</p>}

    </div>
  )
}

export default App