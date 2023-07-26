import React, { useEffect, useRef } from 'react';

const AnimateHeading = ({ text }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const characters = text.split('');

    headingRef.current.innerHTML = ''; // Очищаем содержимое рефа перед добавлением новых букв

    characters.forEach((char, i) => {
      const letter = document.createElement('span');
      if (char === ' ') {
        letter.style.display = 'inline';
      } else {
        letter.style.display = 'inline-block';
      }
      letter.innerText = char;

      letter.dataset.aos = 'zoom-in';
      letter.dataset.aosDuration = '200';
      letter.dataset.aosDelay = `${i * 150}`;

      headingRef.current.appendChild(letter);
    });
  }, [text]);

  return <h2 className="section__title"><span ref={headingRef}></span></h2>;
};

export default AnimateHeading;
