# 🚀 React Learning Journey - Episode 13: React Life Cycle Methods & componentDidMount

## 🎯 What I Learned in This Episode

In this episode, I explored **React Class-Based Component Lifecycle Methods**, focusing on the `componentDidMount` method.

### **Lifecycle Execution Order in Class Components**

When a class-based component is mounted (added to the DOM), the following lifecycle methods are called in order:

1. **Constructor**: Initializes state and binds event handlers.
2. **Render**: Returns JSX for UI rendering.
3. **componentDidMount**: Called **after** the component is added to the DOM. This is a good place for API calls or subscriptions.

### **Why Use componentDidMount?**

- To make **API calls** after the component mounts.
- To **set up subscriptions** (like WebSockets or event listeners).
- To perform **side effects** that should only run once after the component is rendered.
- To **initialize third-party libraries** (e.g., fetching data, initializing animations, etc.).

## 📝 Code Implementation

### **Parent Component (`About.js`)**

```jsx
import { Component } from "react";
import ClassBased from "../components/ClassBased";

class About extends Component {
  constructor() {
    super();
    console.log("Parent constructor is called.");
  }

  componentDidMount() {
    console.log("Parent componentDidMount is called");
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
```

### **Child Component (`ClassBased.js`)**

```jsx
import React, { Component } from "react";

class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child constructor is called");
  }

  componentDidMount() {
    console.log("Child componentDidMount is called");
  }

  render() {
    console.log("Child render method is called");
    return (
      <div className="container">
        <h1 className="title">Hello, from Class-Based Component</h1>

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
```

## 🛠️ **Console Output When Page Loads**

```
Parent constructor is called.
Parent render method is called.
Child constructor is called.
Child render method is called.
Child componentDidMount is called.
Child constructor is called.
Child render method is called.
Child componentDidMount is called.
Parent componentDidMount is called.
```

### **Key Takeaways**

- **First**, the constructor of the parent is called.
- **Then**, the parent's `render` method is executed.
- **Next**, the constructor and `render` methods of each child component are executed.
- **After rendering**, `componentDidMount` is called in each child component.
- **Finally**, `componentDidMount` of the parent component is executed.

### **When to Use componentDidMount?**

- **Fetching data** from an API after the component has been rendered.
- **Setting up timers or event listeners** that should only start after the component is mounted.
- **Interacting with the DOM** (e.g., measuring an element's size or position).

This episode provided a deep understanding of React class component lifecycle methods, particularly `componentDidMount`, which is crucial for handling side effects and API calls in class-based components. 🚀

---

📌 _Next episode: Exploring `componentDidUpdate` and `componentWillUnmount`!_
