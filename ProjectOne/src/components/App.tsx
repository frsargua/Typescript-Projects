import React from "react";

import { pizzas } from "../data/pizza";
import Pizza from "./Pizza";
import AppCSS from "./App.module.css";

function App() {
  return (
    <div className={AppCSS.container}>
      <ul>
        {pizzas.map((el) => (
          <Pizza pizza={el} />
        ))}
      </ul>
    </div>
  );
}

export default App;
