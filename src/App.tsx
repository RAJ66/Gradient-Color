import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

import "./App.css";
import gradient from "../gradient.json";
//const { loadJsonFile } = require("./utils/loadJsonFile");

async function printGradient() {
  gradient.gradient.map((data) => {
    console.log(data);
  });
}

function App() {
  printGradient();
  return (
    <div>
      <Header />
      <h1>Example</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
