import React, { useRef } from "react";

const RefExample = () => {
  // Create a reference to the input element
  const inputRef = useRef(null);

  // Function to focus the input field when button is clicked
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        useRef Hook Example
      </h1>

      {/* Input field with ref */}
      <div className="flex flex-col items-center space-y-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          className="border p-2 rounded w-64"
        />
        <button
          onClick={focusInput}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default RefExample;
