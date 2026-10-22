import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import NameCard from "./components/NameCard";
import EventsDemo from "./components/EventsDemo";
import PlayerPicker from "./components/PlayerPicker";
import Calculator from "./components/Calculator";
import Board from "./components/tic-tac-toe/Board";
import Grid from "./components/grid-light/Grid";
import FAQComponent from "./components/FAQ/FAQComponent";
import Users from "./components/Users/Users";

function App() {
  const products = [
    { id: "p1", name: "Keyboard", price: 49.99, inStock: true },
    { id: "p2", name: "Mouse", price: 19.5, inStock: false },
    { id: "p3", name: "Monitor", price: 189, inStock: true },
  ];
  const FAQ = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
  },
];
  return (
    <>
      {/* <Counter /> */}
      {/* <Details /> */}
      {/* <ProductList products={products} /> */}
      {/* <NameCard /> */}
      {/* <EventsDemo /> */}
      {/* <PlayerPicker /> */}
      {/* <Calculator /> */}
      {/* <Board /> */}
      {/* <Grid /> */}
      {/* <FAQComponent questions={FAQ} /> */}

      <Users />
    </>
  );
}

export default App;
