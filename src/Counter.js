import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

const Counter = () => {

  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state.counter);

  const addByValue = (e) => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(addByValue(value));
  };
  
  return (
    <div>
      <h2>counter : {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
      <form onSubmit={addByValue}>
        <input type="text" name="value" />
        <input type="button" value="Add" />
      </form>
    </div>
  );
};

export default Counter;
