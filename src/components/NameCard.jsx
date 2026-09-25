/*
**Drill 4: Controlled input with a live preview**

Build a `NameCard` component with a text input for a name and a preview line below it that says "Hello, {name}!". As the user types, the preview updates immediately.

It should:

1. Be a controlled input, so its value comes from state.
2. Show "Hello, stranger!" when the input is empty or only spaces.
3. Trim extra spaces in the preview, but not in the input itself, so the user can still type a space between first and last name.
4. Show a character count like "5/20", and stop the user from typing past 20 characters.
5. Have a connected label.

Target time: 5 minutes. Before you paste, add `console.log` checks for your preview logic with `""`, `"   "`, `"  Ankur "`, and `"Ankur Bag"`, and say what you expect each to print.

Follow-up to be ready for: what's the difference between a controlled and an uncontrolled input, and when would you pick uncontrolled?

Paste your code when you're done.
*/

import { useState } from "react";
import { trimInput } from "../utils/helper";

const MAX = 20;

function NameCard() {
  const [name, setName] = useState("");
  const preview = trimInput(name);
  const handleInputChange = (e) => {
    if (e.target.value.length <= MAX) setName(e.target.value);
  };
  return (
    <div>
      <label htmlFor="name-input">Name</label>
      <input
        id="name-input"
        type="text"
        value={name}
        maxLength={MAX}
        onChange={handleInputChange}
      />
      <span>
        {name.length}/{MAX}
      </span>
      <h2>Hello, {preview || "stranger"}!</h2>
    </div>
  );
}

export default NameCard;
