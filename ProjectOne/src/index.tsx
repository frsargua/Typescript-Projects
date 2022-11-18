import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  (window as any).hello();
  return <div>Hello world </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
