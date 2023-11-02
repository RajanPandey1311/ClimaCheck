import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        {" "}
        Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/rajanpandey1/">
          Rajan Pandey
        </a>{" "}
         Leveraging React.js{" "}
        
      </div>
    </React.Fragment>
  );
}

export default App;
