import { useState } from "react";

/*
Plan :
1. Add 2 buttons + -
2. Maintain count in state
3. onClick of + incrment the count in the state, - decremant the count

*/
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => Math.max(c - step, 0));

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <label htmlFor="step">Step:</label>
      </div>
      <div>
        <input
          id="step"
          type="number"
          value={step}
          onChange={(e) => setStep(Math.max(1, e.target.value))}
        />
      </div>
      <div>Actions:</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
