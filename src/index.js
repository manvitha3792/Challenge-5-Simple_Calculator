import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSum = () => {
    setTotal(operand1 + operand2);
  };
  const handleProduct = () => {
    setTotal(operand1 * operand2);
  };
  const handleSubstraction = () => {
    setTotal(operand1 - operand2);
  };
  const handleDivision = () => {
    setTotal(operand1 / operand2);
  };
  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          onChange={(e) => setOperand1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          onChange={(e) => setOperand2(+e.target.value)}
          placeholder="0"
        />
      </div>

      <button onClick={handleSum}>Add Them!</button>
      <br />
      <button onClick={handleProduct}>Multiply!</button>
      <br />
      <button onClick={handleSubstraction}>Subtract!</button>
      <br />
      <button onClick={handleDivision}>Divide!</button>
      <br />

      <h2>{total}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
