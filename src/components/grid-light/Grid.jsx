export default function Grid() {
  const rows = 3,
    cols = 3;
  let output = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const index = r * cols + c;
      output.push(
        <div key={index} className="cell">
          {index}
        </div>,
      );
    }
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 50px)`,
        gap: 4,
      }}
    >
      {output}
    </div>
  );
}
