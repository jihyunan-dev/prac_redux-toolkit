import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  selectCounter,
} from "./redux/module/counter";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
    </>
  );
};

export default App;
