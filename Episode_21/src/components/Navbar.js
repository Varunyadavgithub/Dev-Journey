import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mode, setMode] = useState("Light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <nav
      className={`px-4 py-4 md:px-8 flex justify-between items-center ${
        mode === "Dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
      } transition-all duration-300`}
    >
      {/* Logo */}
      <h1 className="text-3xl font-extrabold">
        <Link to="/" className="hover:text-blue-500 transition-colors">
          LOGO
        </Link>
      </h1>

      {/* Hamburger Menu (Mobile) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-3xl"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex space-x-6 text-lg font-medium md:flex md:space-x-6 ${
          isMenuOpen
            ? "flex flex-col space-y-4 absolute bg-white shadow-lg w-full top-16 left-0 px-4 py-4"
            : "hidden"
        } md:flex`}
      >
        <li>
          <Link to="/grocery" className="hover:text-blue-500 transition-colors">
            Grocery
          </Link>
        </li>
        <li>
          <Link to="/men" className="hover:text-blue-500 transition-colors">
            Men
          </Link>
        </li>
        <li>
          <Link to="/women" className="hover:text-blue-500 transition-colors">
            Women
          </Link>
        </li>
        <li>
          <Link to="/women" className="hover:text-blue-500 transition-colors">
            Kids
          </Link>
        </li>
        <li className="relative flex items-center justify-center">
          <Link to="/cart" className="hover:text-blue-500 transition-colors">
            Cart
            <span className="w-6 h-6 rounded-full bg-red-700 text-white absolute top-0 left-10 flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
          mode === "Dark"
            ? "bg-gray-700 text-white hover:bg-gray-600"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => setMode(mode === "Light" ? "Dark" : "Light")}
      >
        {mode} Mode
      </button>
    </nav>
  );
};

export default Navbar;
