import React from "react";
import '../CSS/Grid.css';
import { dummyData } from "./Data.js";
import CommunityItem from "./CommunityItem.js";

function Grid() {
  const items = /* [1, 2, 3, 4, 5, 6] */ [<CommunityItem /> , <CommunityItem /> , <CommunityItem />,<CommunityItem /> , <CommunityItem /> , <CommunityItem />];
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