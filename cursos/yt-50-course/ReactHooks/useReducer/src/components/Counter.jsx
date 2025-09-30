import { useReducer } from "react"
import { initialState, counterReducer } from "../counterReducer"

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    const handleIncrement = () =>{dispatch({type:'increment'})}
    const handleDecrement = () =>{dispatch({type:'decrement'})}


  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter