import React from "react";

const Home = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f4f6",
    color: "#1f2937",
    padding: "24px",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "16px",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingInlineStart: "20px",
    fontSize: "1.125rem",
  };

  const listItemStyle = {
    marginBottom: "8px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Types of Components in React</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>Functional Components</li>
        <li>Class-Based Components</li>
      </ul>
    </div>
  );
};

export default Home;
