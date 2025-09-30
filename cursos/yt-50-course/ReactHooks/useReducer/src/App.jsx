import React, {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return {count: state.count + 1}
        case "Decrement":
            return {count: state.count - 1};
        case "Reset":
            return { count: 0 };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
    });
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=> {dispatch({type: "Increment"})}}>+</button>
            <button onClick={()=>{dispatch({type: "Decrement"})
            }}>-</button>
            <button onClick={()=>{dispatch({type: "Reset"})}}>Reset</button>
        </div>
    )
};

export default App;
