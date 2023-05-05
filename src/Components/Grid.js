import React from "react";
import '../CSS/Grid.css';

function Grid() {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="GridContainer">
      {items.map((item, key) => (
        <div
          className="GridItem"
          key={key}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Grid;