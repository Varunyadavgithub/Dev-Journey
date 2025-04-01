import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [mode, setMode] = useState("Light");

  const style = {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 20px",
    borderBottom: "1px solid red",
    backgroundColor: mode === "Light" ? "aqua" : "#333",
    color: mode === "Light" ? "black" : "white",
  };

  return (
    <div className="navbar" style={style}>
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          LOGO
        </Link>
      </h1>
      <div className="right-part">
        <ul className="menu_items">
          <li>
            <Link to="/functional">FunComp</Link>
          </li>
          <li>
            <Link to="/class-based">ClassComp</Link>
          </li>
        </ul>
        <button
          className="mode-btn"
          onClick={() => {
            mode === "Light" ? setMode("Dark") : setMode("Light");
          }}
          style={{
            backgroundColor: mode === "Light" ? "black" : "white",
            color: mode === "Light" ? "white" : "black",
            border: "1px solid",
            borderRadius: "10px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          {mode} Mode
        </button>
      </div>
    </div>
  );
};
export default Navbar;
