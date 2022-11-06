import React, { useState } from "react";

const ErrorTest = () => {
  const [errorTest, setErrorTest] = useState("");
  const errorBoundaryTest = (event) => {
    event.preventDefault();
    setErrorTest(event.target.value);
  };
  const AlertError = () => {
    throw new Error("Something is's right!!");
  };
  return (
    <>
      <div>
        <div className="errordiv">
          <code>Type 'Conflict' To See Error Boundary</code>
          <input
            className="errorinput"
            type="text"
            placeholder="conflict"
            onChange={errorBoundaryTest}
            value={errorTest}
            autoFocus
          />
          {errorTest === "conflict" ? <AlertError /> : ""}
        </div>
      </div>
    </>
  );
};

export default ErrorTest;
