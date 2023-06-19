import React from 'react';
import './Grid.css';

function Grid({bookedBoxes}) {
  const gridSize = 5;
  const cells = [];

  function getRandomColor() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF']; // Sample colors
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const bookedBoxElements = document.querySelectorAll('.grid-cell');
  bookedBoxes.forEach((boxId) => {
    const bookedBox = document.getElementById(boxId);
    if (bookedBox) {
      const randomColor = getRandomColor();
      bookedBox.style.backgroundColor = randomColor;
    }
  });
   
  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const cellId = `${row}${col}`;
      cells.push(
        <div key={cellId} id={cellId} className="grid-cell"></div>
      );
    }
  }

  return <div className="grid-panel">{cells}</div>;
}

export default Grid;
