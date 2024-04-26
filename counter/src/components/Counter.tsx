import { useDispatch, useSelector } from "react-redux";
import {
  incrementAsync,
  decrement,
  increment,
} from "../redux/features/counter/counterSlice";
import { AppDispatch, RootState } from "../redux/store";
const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>

      <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
