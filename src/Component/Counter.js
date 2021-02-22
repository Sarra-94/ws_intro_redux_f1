import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../JS/actions/counter";
const Counter = () => {
  // to dipatch any action we use dispatch
  const dispatch = useDispatch();
  // getting state we use useSelector
  const count = useSelector((state) => state.countReducer.count);
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <h3>{count}</h3>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
