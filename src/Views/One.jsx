import React, { useState } from "react";

export const One = () => {
  const init = 0;
  const [count, setCount] = useState(0);
  const ChangeCountPlus = () => {
    setCount(count + 1);
  };
  const ChangeCountMinus = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={ChangeCountPlus}>Increment</button>
      <button onClick={ChangeCountMinus}>Decrement</button>
      <button onClick={() => setCount(init)}>Reset</button>
    </>
  );
};
