import React, { useState } from "react";

export const Test = () => {
  const [studentDetails, setStudentDetails] = useState([
    { id: 1, name: "Ramzy" }
  ]);
  const setStudents = () => {
    setStudentDetails((names) => [
      ...names,
      {
        id: studentDetails.length + 1,
        name: "Ahmed"
      }
    ]);
  };
  return (
    <>
      <button onClick={setStudents}>SetStudent</button>
      <ul>
        {studentDetails.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </>
  );
};
