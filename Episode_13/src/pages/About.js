import { Component } from "react";
import ClassBased from "../components/ClassBased";

class About extends Component {
  constructor() {
    super();
    console.log("Parent constructor is called.");
  }

  componentDidMount() {
    console.log("Parent componentdidmount is called");
  }

  render() {
    console.log("Parent render method is called");

    return (
      <>
        <ClassBased name="Prince" address="Delhi" email="prince@gmail.com" />
        <ClassBased name="Pranav" address="Delhi" email="pranav@gmail.com" />
      </>
    );
  }
}

export default About;
