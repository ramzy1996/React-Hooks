import "./styles.css";
import { One } from "./Views/One";
import { UseContext } from "./Views/UseContext";
import { Reduce } from "./Views/Reduce";

import React, { useEffect, useState } from "react";

export const studentContext = React.createContext([]);

export default function App() {
  const [value, setValue] = useState("");
  const [StudentName, setStudentName] = useState([]);

  const myChange = (e) => {
    setValue(e.target.value);
  };
  const mySubmit = (e) => {
    e.preventDefault();
    setStudentName((names) => [...names, value]);
    setValue("");
  };
  return (
    <>
      <form onSubmit={mySubmit}>
        <input type="text" value={value} onChange={myChange} />
        <button type="submit">Submit</button>
      </form>
      <studentContext.Provider value={StudentName}>
        <UseContext />
      </studentContext.Provider>
      <Reduce />
    </>
  );
}
