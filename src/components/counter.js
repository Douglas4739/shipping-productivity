import React, { useState } from "react";
import './counter.css';

export default function Counter() {
  const title = "Counter";
  const [counter, setCounter] = useState(0);

  const handleClickUp = () => {
    setCounter(counter + 1);
  };

  const handleClickDown = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>{title}</h1>
        <button onClick={handleClickDown}>minus</button>
        <p className="counter">{counter}</p>
        <button onClick={handleClickUp}>plus</button>
      </div>
    </div>
  );
}
