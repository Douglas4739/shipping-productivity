import React from 'react';
import "./layout.css";
import Counter from './counter.js';

export default function Layout() {
    return (
        <div className='container'>
          <title>
            Shipping Productivity
          </title>
          <header className='siteTitle'>Shipping Productivity</header>

          <main>
            <h1 className="heading">Sinks Packed</h1>
            <Counter></Counter>
            <h1 className="heading">Other Packed</h1>
            <Counter></Counter>
            <h1 className="heading">Picked</h1>
            <Counter></Counter>
            <h1 className="heading">BOL's</h1>
            <Counter></Counter>
            <h1 className="heading">Returns</h1>
            <h2>Notes:</h2>
            <textarea></textarea>
          </main>
        </div>
      );
    };
