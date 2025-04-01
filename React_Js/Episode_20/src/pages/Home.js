import React from "react";
import ComponentA from "../components/ComponentA";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col max-w-5xl mx-auto bg-gray-200 p-4 my-4 rounded-lg border-2 border-gray-500">
        <h1 className="text-2xl font-semibold text-center my-2">
          Understand Props drilling
        </h1>
        <ComponentA />
      </div>
    </div>
  );
};

export default Home;
