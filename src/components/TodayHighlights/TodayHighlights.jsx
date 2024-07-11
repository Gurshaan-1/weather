import React from "react";
import "./Todayhighlights.css";
import Highlightcard from "../HighlightCard/Highlightcard";
const TodayHighlights = () => {
const numOfCards = 6;
const indices = Array.from({ length: numOfCards }, (_, index) => index);
  return (
    <>
      <h4 class="highlight">Today's Highlights</h4>
      <div className="Highlight-section">
        {indices.map((index) => (
          <Highlightcard key={index} index={index} />
        ))}
      </div>
    </>
  );
};

export default TodayHighlights;
