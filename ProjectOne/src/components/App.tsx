import React from "react";

import { pizzas } from "../data/pizza";
import Pizza from "./Pizza";
import PizzaSVG from "../svg/pizza.svg";
import AppCSS from "./App.module.css";

function App() {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <PizzaSVG width={120} height={120} />
        <div className={AppCSS.sideTitle} />
      </div>
      <ul>
        {pizzas.map((el) => (
          <Pizza pizza={el} />
        ))}
      </ul>
    </div>
  );
}

export default App;
