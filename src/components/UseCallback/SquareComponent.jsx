import React from "react";

function SquareComponent({ handler, input }) {
  const square = (num) => {
    console.log("Square ", num);
    return num * num;
  };
  console.log("child rendered");

  return (
    <>
      <h1>{square(input)}</h1>
      <button onClick={handler}>Increment</button>
    </>
  );
}

export default React.memo(SquareComponent);
