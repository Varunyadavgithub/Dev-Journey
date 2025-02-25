import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Functional = () => {
  const [count, setCount] = useState(0);
  // Get user data from Store
  const user = useContext(UserContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Update the store data */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Update User Data
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => user.setUserName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Address:</label>
          <input
            type="text"
            value={user.address}
            onChange={(e) => user.setAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => user.setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Hello, from Functional Component
        </h1>
        <h2 className="text-sm text-gray-600 mt-2">
          Understand Context API in Functional Component
        </h2>

        {/* Counter Section */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <h2 className="text-xl font-semibold">{count}</h2>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>

        {/* User Info Section */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-600">
            User Data is coming from store
          </h3>
          <div className="flex flex-col gap-2 mt-4 items-start">
            <h1 className="text-lg font-semibold text-gray-700">
              Name: <span className="font-normal">{user.name}</span>
            </h1>
            <h1 className="text-lg font-semibold text-gray-700">
              Address: <span className="font-normal">{user.address}</span>
            </h1>
            <h1 className="text-lg font-semibold text-gray-700">
              Email: <span className="font-normal">{user.email}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functional;
