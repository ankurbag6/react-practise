import { useState } from "react";
export default function EventsDemo() {
  const [text, setText] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [pet, setPet] = useState("");
  const handleClick = (e) => console.log("clicked", e.target.textContent);
  const handleChange = (e) => setText(e.target.value);
  const handleCheck = (e) => {
    console.log(e.target.checked, e.target.value);
    setAgreed(e.target.checked);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") console.log("submitted", text);
  };

  const handleSelect = (e) => {
    setPet(e.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Save</button>
      <input value={text} onChange={handleChange} onKeyDown={handleKeyDown} />
      <input type="checkbox" checked={agreed} onChange={handleCheck} />
      <div>
        <label htmlFor="pets">Choose a pet:</label>
        <select name="pets" id="pets" onChange={handleSelect}>
          <option value=""></option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
        <span>Selected Pet : {pet || "None"}</span>
      </div>
    </div>
  );
}
