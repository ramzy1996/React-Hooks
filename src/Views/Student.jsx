import React, { useContext, useEffect, useState } from "react";
import { studentContext } from "../App";

export const Student = () => {
  const student = useContext(studentContext);
  return (
    <>
      <ul>
        {student.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </>
  );
};
