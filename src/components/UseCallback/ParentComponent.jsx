import React, { useCallback, useState } from "react";
import SquareComponent from "./SquareComponent";

export default function ParentComponent() {
  const [state, setState] = useState(false);
  const [input, setInput] = useState(1);

  console.log("Parent Component rendered");

  const handler = useCallback(
    () => setInput((prevInput) => prevInput + 1),
    [input]
  );

  const statehandler = () => {
    setState(!state);
  };

  return (
    <>
      <button onClick={statehandler}>Change State Of Parent Component</button>
      <SquareComponent handler={handler} input={input} />
    </>
  );
}
