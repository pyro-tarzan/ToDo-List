import React from "react";
import '../App.css';

// Import Components
import Navbar from "./Navbar";
import Home from "./Home";

const App = (() => {

  return (
      <div className="to-do-app">
        <Navbar/>
        <Home />
      </div>
  );
});

export default App;
