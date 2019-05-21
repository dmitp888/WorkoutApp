import React from "react";
import "./style.css";
import figure from "../images/figure.jpg"; 

function CharacterCard(props) {
  return (
    <div className="card" >
        <img alt={""} src={figure} />
    </div>
  );
}
export default CharacterCard;
