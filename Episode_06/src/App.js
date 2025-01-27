import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
// Main Component
const App = () => {
  return (
    <div>
      <Navbar />
      <ProductCard />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
