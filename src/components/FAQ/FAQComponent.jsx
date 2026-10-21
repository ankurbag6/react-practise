import { useState } from "react";

const FAQPanel = ({ id, question, answer, isSelected, handleExpand }) => {
  const downArrow = <span>▼</span>;
  const rightArrow = <span>►</span>;
  return (
    <>
       <button
        className="question"
        onClick={handleExpand}
        aria-expanded={isSelected}
        aria-controls={`faq-answer-${id}`}
      >
        <span aria-hidden="true">{isSelected ? "▼" : "►"}</span> {question}
      </button>
      
      {isSelected && <div className="answer">{answer}</div>}
    </>
  );
};

const FAQComponent = ({ questions }) => {
  // Create this component
  /*
  
  Implementation Plan:
  1. iterate over q array, display the FAQ
  2. Create FAQPanel -> Div(ht: 50px) > Div (ht: 150px)
  3. STATE : selectedIndex
  */
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const handleExpand = (index) => {
  //   if(selectedIndex === index) {
  //     setSelectedIndex(null);
  //   } else {
  //     setSelectedIndex(index);
  //   }
  // }
  // 4: toggle closed. Use null for "nothing open".
  const handleExpand = (index) =>
    setSelectedIndex((prev) => (prev === index ? null : index));

  return (
    <>
      {questions.map((q, i) => (
        <FAQPanel
          key={i}
          id={i}
          question={q.question}
          answer={q.answer}
          isSelected={selectedIndex === i}
          handleExpand={() => handleExpand(i)}
        />
      ))}
    </>
  );
};

export default FAQComponent;
