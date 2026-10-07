import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]); // every operation performed
  const [selectedOp, setSelectedOp] = useState(null);

  const calculate = (op) => {
    setSelectedOp(op);

    if (num1 === "" || num2 === "") {
      setResult("Enter both numbers");
      return;
    }

    const a = Number(num1);
    const b = Number(num2);
    let value;

    if (op === "+") value = a + b;
    else if (op === "-") value = a - b;
    else if (op === "*") value = a * b;
    else if (op === "/") value = b === 0 ? "Cannot divide by 0" : (a / b).toFixed(2);

    setResult(value);
    setHistory([...history, `${a} ${op} ${b} = ${value}`]);
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
    setHistory([]);
    setSelectedOp(null);
  };

  return (
    <div>
      <h2>Calculator</h2>

      <label>
        First number:{" "}
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </label>
      <label>
        Second number:{" "}
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </label>

      <div>
        <button
          onClick={() => calculate("+")}
          style={{ fontWeight: selectedOp === "+" ? "bold" : "normal" }}
        >
          +
        </button>
        <button
          onClick={() => calculate("-")}
          style={{ fontWeight: selectedOp === "-" ? "bold" : "normal" }}
        >
          -
        </button>
        <button
          onClick={() => calculate("*")}
          style={{ fontWeight: selectedOp === "*" ? "bold" : "normal" }}
        >
          *
        </button>
        <button
          onClick={() => calculate("/")}
          style={{ fontWeight: selectedOp === "/" ? "bold" : "normal" }}
        >
          /
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      {selectedOp && <p>Selected operator: {selectedOp}</p>}
      {result !== null && <p>Result: {result}</p>}

      <h3>Total operations: {history.length}</h3>
      <ul>
        {history.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}
