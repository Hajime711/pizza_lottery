import React, { useState, useEffect } from 'react';
import './Grid.css';

function Grid({ bookedBoxes }) {
  const gridSize = 5;
  const [bookedCells, setBookedCells] = useState([]);

  useEffect(() => {
    const getRandomColor = () => {
      const colors = ['#ec5300', '#ec9b00', '#ecca00']; // Sample colors
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    const assignRandomColors = () => {
      const updatedBookedCells = bookedBoxes.map((boxId) => ({
        id: boxId,
        color: getRandomColor(),
      }));

      setBookedCells(updatedBookedCells);
    };

    assignRandomColors();
  }, [bookedBoxes]);

  const cells = [];

  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const cellId = parseInt(`${row}${col}`);
      const isBooked = bookedCells.some((cell) => cell.id === cellId);

      cells.push(
        <div
          key={cellId}
          id={cellId}
          className={`grid-cell ${isBooked ? 'booked' : ''}`}
          style={{ backgroundColor: isBooked ? bookedCells.find((cell) => cell.id === cellId).color : '' }}
        ></div>
      );
    }
  }

  return <div className="grid-panel">{cells}</div>;
}

export default Grid;
