import { useEffect, useRef, useState } from "react";
const Example3 = () => {
  const [inputValue, setInputValue] = useState("");
  const prevInputValue = useRef("");
  console.log(prevInputValue);
  useEffect(() => {
    prevInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value:{inputValue}</h2>
      <h2>Previous value:{prevInputValue.current}</h2>
    </>
  );
};

export default Example3;
