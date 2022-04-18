import React, { useState } from "react";

export default function Counter() {
  const title = "Counter";
//   const counter = new Counter();
    const [ counter, setCounter ] = useState(0)

    const handleClickUp = () => {
        setCounter(counter + 1)
    }

    const handleClickDown = () => {
        setCounter(counter - 1)
    }

  return (
    <div className="container">
      <h1>{title}</h1>
      <button onClick={handleClickDown}>minus</button>
      <p>{counter}</p>
      <button onClick={handleClickUp}>plus</button>
    </div>
  );
}
