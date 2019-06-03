import React, { Component } from "react";
import exersizes from "../../components/exersizes.js";
import ExersizeCard from "../../components/ExersizeCard"
import "../MuscleGroups/style.css"


class Chest extends Component {

  state = {
    exersizes
  };
  render() {
    return (
      <div className="exersizes">
        {/* Gettting particular muscle group using filter method and then rendering needeed info to the page */}
        {this.state.exersizes.filter(exersize =>
          exersize.musclegroup === "chest").map(exersize => (
            <ExersizeCard>
              <p>{exersize.exersizename}</p>
              <p>instructions</p>
              {exersize.instructions}
              <div className="gifs">
                <img style={{height: 200}} src={exersize.img} alt={exersize.exersizename}  />
              </div>
            </ExersizeCard>
          )
          )}

      </div>
    )
  }

};

export default Chest;