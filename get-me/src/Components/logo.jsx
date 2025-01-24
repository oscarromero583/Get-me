
import React, { useState, useEffect } from 'react';
import './logo.css';

const Logo = () => {
  const [lineVisibility, setLineVisibility] = useState(true);
  const [dotVisibility, setDotVisibility] = useState([true, true, true, true, true]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLineVisibility(!lineVisibility);
      setDotVisibility(dotVisibility.map(() => Math.random() > 0.5));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [lineVisibility, dotVisibility]);

  return (
    <div className="logo-container concept-two">
      <svg className="logo-svg" width="180" height="100" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="180" height="130" rx="10" fill="none" stroke="white" strokeWidth="5" />
        <text className="logo-text" x="100" y="65" fill="white" fontSize="4rem" fontWeight="bold" textAnchor="middle" fontFamily="Pacifico">
          OR
        </text>
        {lineVisibility && (
          <line x1="20" y1="80" x2="180" y2="80" stroke="white" strokeWidth="2" />
        )}
        <g className="dots">
          {dotVisibility.map((visible, index) => (
            <circle key={index} cx={30 + (index * 30)} cy="110" r="5" fill={visible ? "white" : "transparent"} />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Logo;