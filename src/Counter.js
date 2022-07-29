import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    incrementByValue,
    reset
} from "./redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const { counter } = useSelector((state) => state.counter);

  return (
    <div style={{"margin":"20px"}}>
      <h2>counter : {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Increment</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch(incrementByValue(Number(value)))}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
