import React, { Component } from "react";
import exersizes from "../../components/exersizes.js";
import ExersizeCard from "../../components/ExersizeCard"
import "../MuscleGroups/style.css"


class Shoulders extends Component {

  state = {
    exersizes
  };
  render() {
    return (
      <div >
        {/* Gettting particular muscle group using filter method and then rendering needeed info to the page */}
        {this.state.exersizes.filter(exersize =>
        exersize.musclegroup==="shoulders").map(exersize => (
          <ExersizeCard>
          <p>{exersize.exersizename}</p>
          <p>instructions</p>
          {exersize.instructions}
          <img src={exersize.img} alt={exersize.exersizename} />
          </ExersizeCard>
        )
        )}
      </div>
    )
  }

};

export default Shoulders;