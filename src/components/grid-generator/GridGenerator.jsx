import { useState } from "react";

const MAX_SIZE = 10;

// helper: highest value in the grid, ignoring empty cells
const getMax = (cells) =>
  cells.reduce((max, v) => (v !== null && v > max ? v : max), 0);

export default function GridGenerator() {
  const [input, setInput] = useState("");   // what the user types
  const [size, setSize] = useState(0);      // grid size, set only on Generate
  const [cells, setCells] = useState([]);   // null = empty, number = filled
  const [error, setError] = useState("");

  const highest = getMax(cells);            // derived, not stored

  const handleGenerateClick = () => {
    const n = Number(input);
    if (!Number.isInteger(n) || n < 1 || n > MAX_SIZE) {
      setError(`Enter a whole number from 1 to ${MAX_SIZE}`);
      return;
    }
    setError("");
    setSize(n);
    setCells(Array(n * n).fill(null));
  };

  const handleCellClick = (index) => {
    setCells((prev) => {
      const max = getMax(prev);
      const next = [...prev];                          // copy, never mutate
      next[index] = prev[index] === null ? max + 1 : max;
      return next;
    });
  };

  return (
    <>
      <h1>Grid Generator</h1>

      <div>
        <label>
          Input a number:{" "}
          <input
            type="number"
            min={1}
            max={MAX_SIZE}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button onClick={handleGenerateClick}>Generate</button>
        {error && <p role="alert" style={{ color: "crimson" }}>{error}</p>}
      </div>

      <p>Highest Value: {highest}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, 40px)`,
          gap: 4,
        }}
      >
        {cells.map((value, i) => (
          <button
            key={i}
            onClick={() => handleCellClick(i)}
            aria-label={`Row ${Math.floor(i / size) + 1}, column ${(i % size) + 1}, ${value ?? "empty"}`}
            style={{
              width: 40,
              height: 40,
              border: "1px solid #333",
              background: value === null ? "#fff" : "#e8f0fe",
              cursor: "pointer",
            }}
          >
            {value ?? ""}
          </button>
        ))}
      </div>
    </>
  );
}