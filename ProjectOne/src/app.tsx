import React from "react";

import { pizzas } from "./data/pizza";
import Pizza from "./components/Pizza";

function App() {
  return pizzas.map((el) => <Pizza pizza={el} />);
}

export default App;
