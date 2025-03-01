import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Expensive function to calculate the square of a number
  const slowSquare = (num) => {
    console.log("Calculating square...");
    for (let i = 0; i < 1000000000; i++) {} // Simulating a slow calculation
    return num * num;
  };

  // Memoizing the square calculation
  const squaredNumber = useMemo(() => slowSquare(number), [number]);

  return (
    <div
      className={`p-6 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold">useMemo Example</h1>

      {/* Input Field */}
      <input
        type="number"
        className="border border-gray-500 text-black p-2 rounded my-4"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      {/* Show Computed Square Value */}
      <h2 className="text-lg">Squared Value: {squaredNumber}</h2>

      {/* Toggle Dark Mode Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default UseMemoExample;
