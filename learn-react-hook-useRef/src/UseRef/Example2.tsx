import { useRef, useState } from "react";

const Example2 = () => {
  const [mydata, setMyData] = useState("");
  const inputEle = useRef(null);

  const changeStyle = () => {
    if (inputEle.current) {
      //@ts-ignore
      inputEle.current.style.backgroundColor = "#82E0AA";
    }
  };

  return (
    <>
      <h2>Example 2</h2>
      <input
        type="text"
        ref={inputEle}
        value={mydata}
        onChange={(e) => setMyData(e.target.value)}
      />

      <button onClick={changeStyle}> Submit</button>
    </>
  );
};

export default Example2;
