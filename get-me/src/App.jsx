import React from 'react';
import Background from "./Components/background";
import Logo from "./Components/logo";
import Index from './Components/index';
import './App.css'

function App() {
  

  return (
    <>
    <div className='app-container'>
      < Background  className='background'/>
      <Logo className='logo'/>
      <Index className='index'/>
      </div>
    </>
  )
}

export default App
