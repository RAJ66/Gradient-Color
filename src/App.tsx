import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

import "./App.css";

function App() {
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
