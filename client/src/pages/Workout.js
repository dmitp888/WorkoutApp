import React, { Component } from "react";
import exersizes from "../components/exersizes.js";
import CharacterCard from "../components/CharacterCard";
 import "../../src/style.css"
class Workout extends Component {
  state = {
    exersizes,
  };

  
  render() {
    return (
     <div className="figure">

<CharacterCard/>
   
     </div>
    );
    }
}


export default Workout;
