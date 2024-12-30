import { useRef } from "react";

export default function InputFocus({ props }) {
  const inputRef = useRef(null);
  const inputHandler = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={inputHandler}>Focus the input</button>
    </div>
  );
}
