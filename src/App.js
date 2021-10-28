import "./App.css";
import { useState } from "react";
import reactDom from "react-dom";
function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  const MapObj = fruits.map((item) => {
    return item.name;
  });
  function filterRedFruits() {
    const FilterObj = fruits.filter((item) => {
      return item.color === "red";
    });
    setFruits(FilterObj);
  }
  const Totalprice = fruits.reduce((acumulador, vAtual) => {
    return acumulador + vAtual.price;
  }, 0);
  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="price">
        <p>R$: {Totalprice}</p>
      </div>
      <div id="fruits-name">
        <li>{MapObj[0]}</li>
        <li>{MapObj[1]}</li>
        <li>{MapObj[2]}</li>
      </div>

      <button onClick={filterRedFruits}>Apenas frutas vermelhas</button>
    </div>
  );
}

export default App;
