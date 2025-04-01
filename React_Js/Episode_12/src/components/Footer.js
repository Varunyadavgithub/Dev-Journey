const Footer = () => {
    const footerStyle = {
      backgroundColor: "#222",
      color: "white",
      textAlign: "center",
      padding: "15px 0",
    };
  
    const dividerStyle = {
      border: "1px solid #444",
      width: "80%",
      margin: "10px auto",
    };
  
    return (
      <footer style={footerStyle}>
        <hr style={dividerStyle} />
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  