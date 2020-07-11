import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

import "./App.css";
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

function App() {
  printGradient();
  return (
    <div>
      <Header />
      <h1>Example</h1>
      <div className="cards">
        {stockData.map((gradient) => {
          return <Card />;
        })}
      </div>
    </div>
  );
}

export default App;
