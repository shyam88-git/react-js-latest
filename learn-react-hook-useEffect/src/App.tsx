import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //the code we want to run

    console.log("The count is " + count);

    return () => {
      console.log("Iam being cleaned up");
    };
  }, [count]);
  return (
    <div>
      <h1>React Hook Form</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
