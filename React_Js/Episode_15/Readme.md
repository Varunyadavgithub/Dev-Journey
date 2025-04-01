# 🚀 **React Learning Journey - Episode 15: What is Cleanup in React?**

In this episode, I learned about **Cleanup in React Components** for both **Class-Based and Functional Components**. I'll explain cleanup in detail using my own code as an example.

---

## **📌 What is Cleanup in React?**

Cleanup in React refers to the process of **removing side effects** when a component is unmounted. Side effects could include:

- **Intervals (`setInterval`)**
- **Timeouts (`setTimeout`)**
- **Event Listeners (`addEventListener`)**
- **API Calls (`fetch`)**
- **Subscriptions (WebSockets, Firebase, etc.)**

If we don’t clean up these side effects, they **keep running in the background**, even if the component is no longer in use, leading to **memory leaks and performance issues**.

---

# **🛠 Code Implementation & Cleanup Explanation**

### **1️⃣ Class-Based Component (`ClassBased.js`)**

```jsx
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

    // Start an interval
    this.timer = setInterval(() => {
      console.log("Varun");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is called.");

    // Cleanup: Clear the interval before unmounting
    clearInterval(this.timer);
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

### **📌 Breakdown of Cleanup in Class-Based Component**

| **Component Lifecycle**  | **Description**                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `constructor()`          | Initializes state `userDetails = null`.                                                                         |
| `componentDidMount()`    | Fetches data from GitHub API and updates state. Also starts a `setInterval()` that logs `"Varun"` every second. |
| `componentDidUpdate()`   | Runs when the component **re-renders** due to state or prop changes.                                            |
| `componentWillUnmount()` | **Cleans up** the `setInterval()` when the component is about to be removed from the DOM.                       |

### **✅ Where is Cleanup Used?**

- The **interval (`setInterval`)** runs every second.
- If the user **leaves the page or unmounts the component**, the interval will keep running **unless** we clear it.
- **Solution:** `clearInterval(this.timer)` in `componentWillUnmount()` ensures the interval stops.

### **🔴 What Happens Without Cleanup?**

❌ The interval **keeps running in the background**, even if the component is removed, **wasting memory**.

---

### **2️⃣ Functional Component (`Functional.js`)**

```jsx
import React, { useState, useEffect } from "react";

const Functional = (props) => {
  const { name, address, email } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect is called.");

    // Start an interval
    const timer = setInterval(() => {
      console.log("Functional component is called.");
    }, 1000);

    // Cleanup function
    return () => {
      console.log("componentWillUnmount is called.");
      clearInterval(timer);
    };
  }, []); // Empty dependency array ensures useEffect runs only once (like componentDidMount)

  return (
    <div className="container">
      <h1 className="title">Hello, from Functional Component</h1>

      <div className="counter">
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
        <h2 className="count">{count}</h2>
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      <div className="card">
        <h1 className="info">Name: {name}</h1>
        <h1 className="info">Address: {address}</h1>
        <h1 className="info">Email: {email}</h1>
      </div>
    </div>
  );
};

export default Functional;
```

---

### **📌 Breakdown of Cleanup in Functional Component**

| **Hook / Method**                   | **Description**                                                                          |
| ----------------------------------- | ---------------------------------------------------------------------------------------- |
| `useState()`                        | Manages state (`count` variable).                                                        |
| `useEffect(() => {...}, [])`        | Runs once when the component mounts (like `componentDidMount()`).                        |
| `setInterval()`                     | Logs `"Functional component is called."` every second.                                   |
| `return () => {...}` in `useEffect` | Acts as `componentWillUnmount()`, **clearing the interval** when the component unmounts. |

### **✅ Where is Cleanup Used?**

- The **interval (`setInterval`)** runs every second.
- **When the component unmounts**, we use a **cleanup function** inside `useEffect()` to **clear the interval**.

### **🔴 What Happens Without Cleanup?**

❌ The interval will **keep running**, even after the component is removed, causing **performance issues**.

---

### **3️⃣ Parent Component (`About.js`)**

```jsx
import { Component } from "react";
import ClassBased from "../components/ClassBased";

class About extends Component {
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

### **📌 What Happens Here?**

- When `ClassBased` is **mounted**, it starts the **API call and interval**.
- If `About` is removed from the DOM, `componentWillUnmount()` **clears the interval**.

---

## **📌 Summary: Cleanup in React Lifecycle**

| **Component Type**       | **Mounting Phase**                      | **Updating Phase**                 | **Unmounting Phase (Cleanup)**             |
| ------------------------ | --------------------------------------- | ---------------------------------- | ------------------------------------------ |
| **Class Component**      | `componentDidMount()` (Starts interval) | `componentDidUpdate()`             | `componentWillUnmount()` (Stops interval)  |
| **Functional Component** | `useEffect()` (Starts interval)         | `useEffect()` on state/prop change | Cleanup inside `useEffect` return function |

---

## **🔥 Key Takeaways**

✅ **Memory leaks happen** if we don’t clean up side effects.  
✅ In **Class Components**, cleanup happens in `componentWillUnmount()`.  
✅ In **Functional Components**, cleanup happens inside **`useEffect()` return function**.  
✅ **Always clean up intervals, event listeners, and API calls** to avoid unnecessary performance issues.

---

## **📝 Interview Questions on Cleanup in React**

### **1️⃣ Why is cleanup important in React components?**

👉 Cleanup prevents **memory leaks**, optimizes performance, and stops unnecessary execution of functions.

### **2️⃣ How do you perform cleanup in a Class Component?**

👉 Use `componentWillUnmount()` to clear intervals, remove event listeners, or cancel API requests.

### **3️⃣ How do you perform cleanup in a Functional Component?**

👉 Return a cleanup function inside `useEffect()`.
