import React, { useContext } from "react";
import { MyCountContext } from "./MyCountContext";

function GrandChildContextComponent() {
  const { input, setInput } = useContext(MyCountContext);
  return (
    <>
      <h1>{input}</h1>
      <button onClick={() => setInput((prev) => prev + 1)}>Increment</button>
    </>
  );
}

export default GrandChildContextComponent;
