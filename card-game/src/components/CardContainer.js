import React from "react";
import "./CardContainer.css";
import Card from "./Card";

const CardContainer = (props) => {
  return (
    <div className={`card-container ${props.difficulty.toLowerCase()}`}>
      {props.cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
