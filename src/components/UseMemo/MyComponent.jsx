import React, { useState, useMemo } from "react";

function SquareComponent({ input }) {
  function square(number) {
    console.log("Square ", number);
    return number * number;
  }

  const memoizedSquare = useMemo(() => square(input), [input]);

  return (
    <div>
      <h1>Memoized Square Function</h1>
      <p>Result: {memoizedSquare}</p>
    </div>
  );
}

function MyComponent() {
  const [render, setRender] = useState(false);
  const [number, setNumber] = useState(1);

  const handleIncrement = () => setNumber(number + 1);

  console.log("Component Re-rendered");

  return (
    <>
      <SquareComponent input={number} />
      <button onClick={() => setRender(!render)}>Re-Render</button>
      <button onClick={handleIncrement}>Increment Number</button>
    </>
  );
}

export default MyComponent;
