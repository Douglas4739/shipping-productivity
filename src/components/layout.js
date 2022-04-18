import React from 'react';
import "./layout.css";
import Counter from './counter.js';
import Card from './card.js';
import Report from './report.js';

export default function Layout() {
    return (
        <div className='container'>
          <title>
            Shipping Productivity
          </title>
          <header className='siteTitle'>Shipping Productivity</header>

          <main>
            <h1 className="heading">Sinks Packed</h1>
            <Card></Card>
            <h1 className="heading">Other Packed</h1>
            <Card></Card>
            <h1 className="heading">Picked</h1>
            <Card></Card>
            <h1 className="heading">BOL's</h1>
            <Card></Card>
            <h1 className="heading">Returns</h1>
            <Card></Card>
            <h2>Notes:</h2>
            <textarea></textarea>
            <Report></Report>
          </main>
        </div>
      );
    };
