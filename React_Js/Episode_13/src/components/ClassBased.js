import React, { Component } from "react";

class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // states
      count: 0,
    };
    console.log("constructor is called");
  }

  componentDidMount() {
    console.log("componentdidmount is called");
  }
  render() {
    console.log("render method is called");

    return (
      <div className="container">
        <h1 className="title">Hello, from Class Based Component</h1>

        <div className="counter">
          <button
            className="btn"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
          <h2 className="count">{this.state.count}</h2>
          <button
            className="btn"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
        </div>

        <div className="card">
          <h1 className="info">Name: {this.props.name}</h1>
          <h1 className="info">Address: {this.props.address}</h1>
          <h1 className="info">Email: {this.props.email}</h1>
        </div>
      </div>
    );
  }
}
export default ClassBased;
