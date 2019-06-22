import React, { Component } from "react";
import exersizes from "../components/exersizes.js";
import ExersizeCard from "../components/ExersizeCard"
import "../../src/style.css"


class Biceps extends Component {

  state = {
    exersizes
  };
  render() {
    return (
      <div className="exersizes">
        <h1> Biceps  </h1>
        {/* Gettting particular muscle group using filter method and then rendering needeed info to the page */}
        {this.state.exersizes.filter(exersize =>
          exersize.musclegroup === "biceps").map(exersize => (
            <ExersizeCard>
              <h2>{exersize.exersizename}</h2>
              <h5>instructions</h5>
              {exersize.instructions}
              <div className="gifs">
                <img style={{ height: 200 }} src={exersize.img} alt={exersize.exersizename} />
              </div>
              <div>
                <button style={{ left: 1200, bottom: 20 }} className="btn btn-primary col-1 col-mr-auto" onClick={this.handleSubmit} type="submit">Add exersize</button>              </div>
            </ExersizeCard>
          )
          )}
      </div>
    )
  }

};

export default Biceps;