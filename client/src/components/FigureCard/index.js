import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';
import figure from "../images/figure3.png"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chest from '../../pages/Chest';
import Biceps from '../../pages/Biceps';
import Shoulders from '../../pages/Shoulders';
import Abs from '../../pages/Abs';
import Quads from '../../pages/Quads';

const MAP = {
  name: "my-map",
    areas: [
      { name:"abs", href:"abs", coords:[155,184,147,200,149,256,179,288,204,288,225,261,236,250,239,187,195,176], shape:"poly", preFillColor: "transparent", fillColor: "blue" },
      {name:"quads",href:"quads", coords:[225,275,241,273,250,352,241,403,227,418,213,405,203,372,200,324,212,294], shape:"poly", preFillColor: "transparent", fillColor: "blue" },
      { name:"quads",href:"quads",  coords:[160,275,187,322,175,409,158,420,145,403,136,364,139,317,144,284], shape:"poly", preFillColor: "transparent", fillColor: "blue" },
      { name:"chest", href:"chest1", coords:[153,119,195,123,232,120,252,158,244,165,216,170,197,163,172,171,153,171,138,161,141,142], shape:"poly", preFillColor: "transparent", fillColor: "blue" },
      {  name:"biceps", href:"biceps" ,coords:[112,165,127,169,124,194,102,222,92,217,95,189,104,180], shape:"poly", preFillColor: "transparent", fillColor: "blue" },
      {  name:"biceps",href:"biceps",  coords:[268,165,282,172,295,206,294,222,281,222,258,179], shape:"poly", preFillColor: "transparent", fillColor: "blue" },
      {  name:"shoulders",href:"shoulders",  coords:[273,132,281,160,257,157,241,126,251,117], shape:"poly", preFillColor: "transparent", fillColor: "blue" },
      {  name:"shoulders", href:"shoulders", coords:[136,121,121,125,107,151,127,163,142,137], shape:"poly", preFillColor: "transparent", fillColor: "blue" },
    ]  
};


class FigureCard extends Component {
render(){
  return (
    <div className="container" >
   

    <ImageMapper src={figure} map={MAP}  />
    </div>
  )


  }
}   
    
  

//   return (
//     <div className="container" >

//     <ImageMapper src={figure} map={MAP} 

//      />
//     </div>
//   );
// }
export default FigureCard;