import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Navbar = () => {
  const [mode, setMode] = useState("Light");
  // Get user data from Store
  const user = useContext(UserContext);

  return (
    <div
      className={`flex justify-between items-center px-6 py-4 border-b-2 ${
        mode === "Light" ? "bg-blue-300 text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Logo / Brand Name */}
      <h1 className="text-xl font-bold">
        <Link to="/" className="no-underline">
          {user.name}
        </Link>
      </h1>

      {/* Menu Items */}
      <div className="flex items-center gap-6">
        <ul className="flex gap-4 text-lg">
          <li>
            <Link
              to="/functional"
              className="hover:text-red-500 transition duration-300"
            >
              FunComp
            </Link>
          </li>
          <li>
            <Link
              to="/class-based"
              className="hover:text-red-500 transition duration-300"
            >
              ClassComp
            </Link>
          </li>
        </ul>

        {/* Mode Toggle Button */}
        <button
          className={`px-4 py-2 rounded-lg border ${
            mode === "Light"
              ? "bg-black text-white border-black"
              : "bg-white text-black border-white"
          } transition duration-300`}
          onClick={() => setMode(mode === "Light" ? "Dark" : "Light")}
        >
          {mode} Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
