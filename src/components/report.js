import React from "react";
import "./report.css";

export default function Report() {
  const sendReport = () => {
    console.log('button pressed');
  };

  return (
    <button className="report" onClick={sendReport}>
      Send Report
    </button>
  );
}