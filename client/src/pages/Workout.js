import React, { Component } from "react";
import exersizes from "../components/exersizes.json";
import CharacterCard from "../components/CharacterCard";

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
