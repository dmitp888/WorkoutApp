import React, { Component } from "react";
import exersizes from "../components/exersizes.js";
import FigureCard from "../components/FigureCard";
 import "../../src/style.css"
class Workout extends Component {
  state = {
    exersizes,
  };

  
  render() {
    return (
     <div className="figure">

<FigureCard/>
   
     </div>
    );
    }
}


export default Workout;
