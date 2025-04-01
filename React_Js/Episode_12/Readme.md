# 🚀 React Learning Journey - Episode 12: Dive Deep into Class-Based Components

## Introduction

In this episode, we explored **Class-Based Components** in React and how they differ from **Functional Components**. We also implemented **state management** and **props handling** in both types of components.

---

## 📌 What are Class-Based Components?

Class-based components are a way to define components using JavaScript ES6 classes. They are useful when a component requires state management and lifecycle methods.

- Introduced before React Hooks.
- Require a **constructor()** to initialize state.
- Use **this.state** to manage state.
- Use **this.setState()** to update state.
- Access props via **this.props**.

---

## 🔍 Difference Between Functional and Class-Based Components

| Feature           | Functional Component | Class-Based Component                                             |
| ----------------- | -------------------- | ----------------------------------------------------------------- |
| State Management  | `useState` hook      | `this.state`                                                      |
| Updating State    | `setState(value)`    | `this.setState({})`                                               |
| Props Access      | `props`              | `this.props`                                                      |
| Lifecycle Methods | `useEffect`          | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` |
| Code Simplicity   | More concise         | More verbose                                                      |

---

## 📌 Understanding the Code

### 1️⃣ Functional Component (Using Hooks)

- Uses `useState` to manage state.
- Receives props directly as function parameters.
- Updates state using `setState()`.

```jsx
import React, { useState } from "react";

const Functional = (props) => {
  const { name, address, email } = props;
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello from Functional Component</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h3>Name: {name}</h3>
      <h3>Address: {address}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default Functional;
```

### 2️⃣ Class-Based Component

- Uses `constructor()` to initialize state.
- Uses `this.setState()` to update state.
- Accesses props using `this.props`.

```jsx
import React from "react";

class ClassBased extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>Hello from Class-Based Component</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <h3>Name: {this.props.name}</h3>
        <h3>Address: {this.props.address}</h3>
        <h3>Email: {this.props.email}</h3>
      </div>
    );
  }
}

export default ClassBased;
```

---

## 🚀 Key Takeaways

1. **Class-based components** are useful for handling complex logic and lifecycle methods.
2. **Functional components** with hooks (`useState`, `useEffect`) provide a cleaner and more modern way to build React components.
3. **Props** in class components are accessed using `this.props`, whereas in functional components, they are passed as function parameters.
4. **State management** in class components uses `this.state` and `this.setState()`, while functional components use `useState()`.

---

## 📖 Recommended Reading

- [Why do we write super(props)?](https://overreacted.io/why-do-we-write-super-props/)
- [React Docs: Class Components](https://reactjs.org/docs/react-component.html)
- [React Docs: Functional Components & Hooks](https://reactjs.org/docs/hooks-intro.html)

---

## 🎯 What's Next?

In the next episode, we'll explore **Lifecycle Methods in Class Components** and how they compare to **useEffect()** in Functional Components.

---

Happy Coding! 🚀
