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
        {this.state.exersizes.map(exersize => (
          <ExersizeCard
            // key={exersize.exersizename}
            // musclegroup={exersize.musclegroup}
            // exersizename={exersize.exersizename}
            // instructions={exersize.instructions}
            // img={exersize.img}
          >
          <h3>{exersize.exersizename}</h3>
          <p>{exersize.instructions}</p>
          <img src={exersize.img} alt={exersize.exersizename} />
          </ExersizeCard>
        )
        )}
      </div>
    )
  }

};

export default Shoulders;