import React, { useState } from "react";
import { useEffect } from "react";

const Functional = (props) => {
  const { name, address, email } = props;
  //   states
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect is called.");
    const timer = setInterval(() => {
      console.log("Functional component is called.");
    }, 1000);
    return () => {
      console.log("componentWillUnmount is called.");
      clearInterval(timer);
    };
  }, []);

  // 🔥 Equivalent in Functional Components using useEffect([])
  // useEffect(() => {
  //   console.log("useEffect is called.");
  // }, [count]);

  return (
    <div className="container">
      <h1 className="title">Hello, from Functional Component</h1>

      <div className="counter">
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
        <h2 className="count">{count}</h2>
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      <div className="card">
        <h1 className="info">Name: {name}</h1>
        <h1 className="info">Address: {address}</h1>
        <h1 className="info">Email: {email}</h1>
      </div>
    </div>
  );
};

export default Functional;
