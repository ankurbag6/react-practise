import { useState, useEffect } from "react";
export default function Square({value, onSquareClick}) {

//   const [hasX, setHasX] = useState(false);
//   useEffect(() => {
//   const id = setTimeout(() => {
//         setHasX(false);
//     }, 2000);

//     return () => clearTimeout(id); // cleanup
//     }, [hasX]);
//   function handleClick() {
//     console.log("clicked!");
//     // setHasX(!hasX);
//   }

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
