import React, { useState, useEffect } from 'react';
import './canvastree.jsx';

const ScrollStopper = () => {
  const [isCanvasVisible, setIsCanvasVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 200; // Пороговая позиция прокрутки
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (currentPosition > threshold) {
        setIsCanvasVisible(false);
      } else {
        setIsCanvasVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <canvas
        style={{
          position: 'fixed',
          left: '0',
          bottom: '0',
          width: '100%',
          zIndex: '-1',
          height: '100%',
          opacity: isCanvasVisible ? '1' : '0',
          transition: 'opacity 0.7s ease-in-out',
        }}
        id="canvas"
      ></canvas>
    </div>
  );
};

export default ScrollStopper;
