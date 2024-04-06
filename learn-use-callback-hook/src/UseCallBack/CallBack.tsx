import { useCallback, useState } from "react";
import Todo from "./Todo";

const CallBackHook = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    //@ts-ignore
    setTodo((prev) => [...prev, "new entry"]);
    console.log("render callback");
  }, [setTodo]);

  return (
    <>
      <Todo todo={todo} addTodo={addTodo} />
      <div>
        count:{count}
        <br />
        <br />
        <button onClick={increment}>+ </button>
      </div>
    </>
  );
};
export default CallBackHook;
