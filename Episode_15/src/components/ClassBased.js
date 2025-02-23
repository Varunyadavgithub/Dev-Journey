import React, { Component } from "react";

class ClassBased extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: null,
    };
    console.log("constructor is called.");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Varunyadavgithub");
    const resData = await data.json();
    // console.log(resData);
    this.setState({
      userDetails: resData,
    });
    console.log("componentDidMount is called.");
    this.timer=setInterval(()=>{
      console.log("Varun")
    },1000)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called.");
  }

  // 🤔 How Did Developers Handle This Before useEffect?
  // componentDidUpdate(preProps, preState) {
  //   if (this.state.userDetails!==preState.userDetails) {
  //     console.log("componentDidUpdate is called.");
  //   }
  // }

  componentWillUnmount() {
    console.log("componentWillUnmount is called.");
    clearInterval(this.timer)
  }

  render() {
    console.log("render method is called.");
    if (this.state.userDetails === null) {
      return <h1>Loading...</h1>;
    }
    const { name, avatar_url } = this.state.userDetails;
    return (
      <div className="container">
        <h1 className="title">Hello, from Class Based Component</h1>

        <div className="card">
          <h1 className="info">Name: {name}</h1>
          {/* <h1 className="info">Name: {this.state.userDetails.name}</h1> */}
          {/* <img src={this.state.userDetails.avatar_url} alt="profile_img" /> */}
          <img src={avatar_url} alt="profile_img" />
        </div>
      </div>
    );
  }
}
export default ClassBased;

/*
---------------- Mounting Phase Start -----------------
constructor is called userDetails with (null) value.
render method is called with returning loading message.

---------------- Update Phase Start -----------------
constructor is called userDetails with (resData) value.
render method is called with returning (UI) updated data resDate.

---------------- Unmount Phase Start -----------------
When we leave this page or component then it is called -> (componentWillUnmount is called.); 

*/
