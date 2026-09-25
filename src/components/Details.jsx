/*
Drill 2: Toggle show/hide

Build a Details component with a button and a paragraph of text. 
Clicking the button shows or hides the text. 
The button's label should say "Show details" when the text is hidden and "Hide details" when it's visible. The text starts hidden.

It should:

Use one piece of state, and derive everything else from it.
Actually remove the text from the page when hidden, not just make it invisible.
Tell a screen reader whether the section is open, with aria-expanded on the button and aria-controls pointing at the text.

Target time: 4 minutes. Be ready to answer one follow-up: what's the difference between hiding with {open && <p>...</p>} and hiding with nd hiding with CSS display: none?
*/

import { useState } from "react";

function Details() {
  const [isVisible, setIsVisible] = useState(false);
  let buttonText = !isVisible ? "Show details" : "Hide details";
  const sampleText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque " +
    "perferendis exercitationem quo perspiciatis obcaecati, impedit " +
    "voluptatum cupiditate sed eaque autem est eum laborum, sapiente " +
    "veritatis provident suscipit expedita aspernatur.";
  const handleClick = () => {
    console.log("hello", isVisible);
    setIsVisible((v) => !v);
  };
  return (
    <div>
      <button aria-expanded={isVisible} aria-controls="sampleText" onClick={handleClick}>{buttonText}</button>
      {isVisible && (
        <p id="sampleText" >{sampleText}</p>
      )}
      <p id="sampleText2" 
      style={{ display: isVisible ? "block" : "none", color: "steelblue" }}
      >{sampleText}</p>
    </div>
  );
}

export default Details;
