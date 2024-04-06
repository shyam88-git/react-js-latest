import { useEffect, useRef, useState } from "react";

const Example1 = () => {
  const [myData, setMyData] = useState("");

  const count = useRef(10);

  console.log(count);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h1>First Example of useRef</h1>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />

      <p>The Number is {count.current}</p>
    </>
  );
};

export default Example1;
