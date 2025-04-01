const Navbar = () => {
    const style= {
        "display": "flex",
        "justifyContent": "space-between",
        "padding": "0px 20px",
        "borderBottom": "1px solid red",
        "backgroundColor":"aqua"
      }
  return (
    <div className="navbar" style={style}>
      <h1>LOGO</h1>
      <ul className="menu_items">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Card</li>
      </ul>
    </div>
  );
};
export default Navbar; //default export