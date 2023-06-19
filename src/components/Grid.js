import React from 'react';
import './Grid.css';

function Grid() {
  const gridSize = 5;
  const cells = [];
  for (let row = 1; row <= gridSize; row++) {
    for (let col = 1; col <= gridSize; col++) {
      const cellId = `cell-${row}-${col}`;
      cells.push(
        <div key={cellId} id={cellId} className="grid-cell">
          
        </div>
      );
    }
  }

  return (
    <div className="grid-panel">
      {cells}
    </div>
  );
}

export default Grid;
