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
        <div id="sinks">
          <h2 className="heading">Sinks Packed</h2>
          <Card />
        </div>
        <div id="other">
          <h2 className="heading">Other Packed</h2>
          <Card />
        </div>
        <div id="picked">
          <h2 className="heading">Picked</h2>
          <Card />
        </div>
        <div id="BOL">
          <h2 className="heading">BOL's</h2>
          <Card />
        </div>
        <div id="return">
          <h2 className="heading">Returns</h2>
          <Card />
        </div>
        <div>
          <h2 className="siteTitle">Notes:</h2>
          <textarea
            name="message"
            id="notes"
            placeholder="MESSAGE"
          ></textarea>{" "}
        </div>
      </main>
      <Report />
    </div>
  );
}
