import React from 'react';
import Background from "./Components/background";
import Logo from "./Components/logo";
import Index from "./Components/index"
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="background-container">
        <Background className="background" />
      </div>
      <div className="content-container">
        <Logo className="logo" />
        <Index className="index" />
      </div>
    </div>
  );
}

export default App;
