import React, { useState, useEffect } from 'react';
import './typewriter.css';

const sentences = [
  "There are some things you need to know about me...",
  "I am a Front-End Developer.",
  "I am always open to correction and learning.",
  "I am team-compatible.",
  "I am a very wicked person 😂",
  "Swear say eh no shock you 😂"
];

const TypewriterComponent = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const [sentence, setSentence] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentTypingIndex >= sentences[currentSentenceIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentTypingIndex(0);
          setCurrentSentenceIndex((currentSentenceIndex + 1) % sentences.length);
          setSentence('');
          typingInterval();
        }, 1000);
      } else {
        setSentence(sentences[currentSentenceIndex].slice(0, currentTypingIndex + 1));
        setCurrentTypingIndex(currentTypingIndex + 1);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, [currentSentenceIndex, currentTypingIndex]);

  return (
    <div className="typewriter">
      <p>
        {sentence}
        <span className="cursor"></span>
      </p>
    </div>
  );
};

export default TypewriterComponent;