import React, { useContext, useEffect, useReducer, useState } from "react";

const init = 0;
const reduce = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};
export const Reduce = () => {
  const [state, dispatch] = useReducer(reduce, init);
  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
      <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
    </>
  );
};
