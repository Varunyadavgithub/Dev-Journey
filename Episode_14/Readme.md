# 🚀 React Learning Journey - Episode 14: componentDidUpdate & componentWillUnmount

## 📌 Understanding React Lifecycle Methods

React class-based components have different lifecycle methods that get called at various stages of a component's life. Two important lifecycle methods covered in this episode are:

### 🔄 `componentDidUpdate()`

- This method is invoked immediately after an update occurs.
- It is used to perform operations based on changes in state or props.
- **Common Use Case:** Making API calls when state/props change, updating the DOM, or interacting with third-party libraries.

### ❌ `componentWillUnmount()`

- This method is called just before a component is unmounted and destroyed.
- **Common Use Case:** Cleaning up event listeners, canceling API requests, or clearing timers to prevent memory leaks.

---

## 📝 Code Implementation

### `About.js`

```javascript
import { Component } from "react";
import ClassBased from "../components/ClassBased";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <ClassBased />
      </>
    );
  }
}

export default About;
```

### `ClassBased.js`

```javascript
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
    this.setState({
      userDetails: resData,
    });
    console.log("componentDidMount is called.");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is called.");
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
          <img src={avatar_url} alt="profile_img" />
        </div>
      </div>
    );
  }
}
export default ClassBased;
```

---

## 🔄 Lifecycle Execution Flow

### **Mounting Phase:**

1. `constructor()` → Initializes state with `userDetails: null`.
2. `render()` → Displays `Loading...` initially.
3. `componentDidMount()` → Fetches API data, updates state.
4. `render()` → Rerenders UI with fetched data.

### **Update Phase:**

- `componentDidUpdate()` is called when state/props change.
- The component updates based on new data.

### **Unmounting Phase:**

- `componentWillUnmount()` is triggered when the component is removed from the DOM.

---

## 🎯 Key Takeaways

- `componentDidUpdate()` helps in reacting to state/prop changes.
- `componentWillUnmount()` is essential for cleanup operations.
- Lifecycle methods ensure efficient component behavior.

📌 Keep exploring React and mastering component lifecycle methods! 🚀
