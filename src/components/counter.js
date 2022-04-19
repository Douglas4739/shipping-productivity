import React, { useState } from "react";
import './counter.css';

export default function Counter() {
  // const title = "Counter";
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
        {/* <h1 className='cardTitle'>{title}</h1> */}
        <button className="btn" onClick={handleClickDown}>-</button>
        <p className="counter">{counter}</p>
        <button className="btn" onClick={handleClickUp}>+</button>
      </div>
    </div>
  );
}
