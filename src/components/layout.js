import React from "react";
import "./layout.css";
import Card from "./card.js";
import Report from "./report.js";

export default function Layout() {
  return (
    <div className="container">
      <title>Shipping Productivity</title>
      <header className="siteTitle">Shipping Productivity</header>
      <main ClassName="main">
        <h1 className="heading">Sinks Packed</h1>
        <Card />
        <h1 className="heading">Other Packed</h1>
        <Card />
        <h1 className="heading">Picked</h1>
        <Card />
        <h1 className="heading">BOL's</h1>
        <Card />
        <h1 className="heading">Returns</h1>
        <Card />
        <h2 className="siteTitle">Notes:</h2>
        <textarea name="message" id="notes" placeholder="MESSAGE"></textarea>
      </main>
      <Report />
    </div>
  );
}
