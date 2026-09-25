import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import NameCard from "./components/NameCard";

function App() {
  const products = [
    { id: "p1", name: "Keyboard", price: 49.99, inStock: true },
    { id: "p2", name: "Mouse", price: 19.5, inStock: false },
    { id: "p3", name: "Monitor", price: 189, inStock: true },
  ];
  return (
    <>
      {/* <Counter /> */}
      {/* <Details /> */}
      {/* <ProductList products={products} /> */}
      <NameCard />
    </>
  );
}

export default App;
