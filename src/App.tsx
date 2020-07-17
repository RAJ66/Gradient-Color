import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

import "./App.css";
import "./Reset.css";

//import gradient from "../gradient.json";
//const { loadJsonFile } = require("./utils/loadJsonFile");
import { stockData } from "./data";

function printGradient() {
  /*
  stockData.map((data, key) =>{
    console.log(data+"->"+key)
  }*/
  //console.log(stockData);
  stockData.map((gradient) => console.log(gradient.color1));
}

type Gradient = {
  color1: string;
  color2: string;
};

function App() {
  printGradient();
  return (
    <div>
      <Header />
      <h1>Example</h1>
      <div className="cards">
        {stockData.map((gradient: Gradient, key) => {
          return (
            <Card color1={gradient.color1} color2={gradient.color2} key={key} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
