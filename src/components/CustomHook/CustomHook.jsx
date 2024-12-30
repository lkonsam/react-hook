import React from "react";
import useWindowSize from "./UseWindowSize";

export default function CustomHook() {
  const windowSize = useWindowSize();
  return (
    <>
      <h1>Width: {windowSize.width}</h1>
      <h1>Height: {windowSize.height}</h1>
    </>
  );
}
