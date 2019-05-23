import React from "react";
import "./style.css";

function ExersizeCard({children}) {
  return (
    <div className="card" >
      {children}
      </div>
  );
}
export default ExersizeCard;
