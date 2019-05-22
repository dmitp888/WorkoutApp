import React from "react";
import ImageMapper from 'react-image-mapper';
import figure from "../images/figure.jpg"

const MAP = {
  name: "my-map",
    areas: [
      { name:"abs", href: "https://en.wikipedia.org/wiki/Game_of_Thrones", coords:[791,870,497,614], shape:"rect", preFillColor: "green", fillColor: "blue" },
      {name:"quads2", coords:[790,893,830,1185,798,1306,681,1248,678,1050,715,956], shape:"poly", preFillColor: "green", fillColor: "blue" },
      { name:"quads1", coords:[480,911,449,1147,472,1299,593,1279,614,1102,564,955,520,910,509,894], shape:"poly", preFillColor: "green", fillColor: "blue" },
      { name:"chest", coords:[449,525,500,569,621,544,753,572,834,529,836,413,648,400,474,403], shape:"poly", preFillColor: "green", fillColor: "blue" },
      {  name:"biceps1", href:"" ,coords:[434,579,344,743,288,697,348,565,383,546], shape:"poly", preFillColor: "green", fillColor: "blue" },
      {  name:"biceps2", coords:[931,749,839,580,886,548,935,571,986,693,973,727], shape:"poly", preFillColor: "green", fillColor: "blue" },
      {  name:"shoulder1", coords:[400,415,456,397,416,535,356,503], shape:"poly", preFillColor: "green", fillColor: "blue" },
      {  name:"shoulder2", coords:[863,410,901,450,926,538,850,521,845,446], shape:"poly", preFillColor: "green", fillColor: "blue" },
    ]  
};

function CharacterCard() {
  return (
    <ImageMapper src={figure} map={MAP} />
  );
}
export default CharacterCard;