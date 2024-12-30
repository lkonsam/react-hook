import React, { useState } from "react";
import ChildContextComponent from "./ChildContextComponent";
import { MyCountContext } from "./MyCountContext";

export default function ParentContextComponent() {
  const [input, setInput] = useState(1);
  return (
    <>
      <MyCountContext.Provider value={{ input, setInput }}>
        <ChildContextComponent />
      </MyCountContext.Provider>
    </>
  );
}
