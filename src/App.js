import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "./redux/module/counter";

const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <>
      <h1>{count}</h1>
      <button>increment</button>
      <button>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>버튼!</button>
    </>
  );
};

export default App;
