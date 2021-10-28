import "./App.css";
import { useState } from "react";
import reactDom from "react-dom";
function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function filterRedFruits() {
    const FilterObj = fruits.filter((item) => {
      return item.color === "red";
    });
    setFruits(FilterObj);
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="price">
        <p>
          R$:
          {fruits.reduce((acumulador, vAtual) => {
            return acumulador + vAtual.price;
          }, 0)}
        </p>
      </div>
      <ul id="fruits-name">
        {fruits.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>

      <button onClick={filterRedFruits}>Apenas frutas vermelhas</button>
    </div>
  );
}

export default App;
