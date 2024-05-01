import React,{ useState } from "react";
import '../App.css';

// Import Components
import Navbar from "./Navbar";
import Maincontents from "./Maincontents";

const App = (() => {

  const [isClick, setIsClick] = useState(false);

  function onMenuClick(){
    setIsClick(!isClick);
  }

  return (
      <div className="to-do-app">
        <Navbar menuFunction={onMenuClick} />
        <Maincontents hidePanel={isClick ? "hide-panel" : ""}/>
      </div>
  );
});

export default App;
