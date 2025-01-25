import React from 'react';
import './index.css';
import Typewriter from "./typewriter";
import Header from "./header"
import Icons from "./icons"

function index() {
  return (
    <div className='index-content'>
    <div><h1>Oscar Romero</h1></div>
    <div><Typewriter/></div>
    <div><Header /></div>
    <div> <Icons /></div>
    </div>
  )
}

export default index