import {useReducer, useState} from "react";
import {initialState, counterReducer} from "../counterReducer";

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleIncrement = () => {
        dispatch({type: "increment"});
    };
    const handleDecrement = () => {
        dispatch({type: "decrement"});
    };

    const handleIncrementByAmount = () => {
        dispatch({type: "incrementByAmount", payload: Number(inputValue)});
        setInputValue(0);
    };

    const handleDecrementByAmount = () => {
        dispatch({type: "decrementByAmount", payload: Number(inputValue)});
        setInputValue(0);
    };

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <div>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <button onClick={handleIncrementByAmount}>+</button>
                <button onClick={handleDecrementByAmount}>-</button>
            </div>
        </div>
    );
};

export default Counter;
