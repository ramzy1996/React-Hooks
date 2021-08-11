import React, { useEffect, useState } from "react";

export const Hello = () => {
  const [values, setvalue] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setvalue([json]));
  }, []);
  return (
    <>
      {values.map((e) => (
        <h1>{e.title}</h1>
      ))}
      {name}
      <button onClick={() => setName("Ramzy")}>AddNew</button>
    </>
  );
};
