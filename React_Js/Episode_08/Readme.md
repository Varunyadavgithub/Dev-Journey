# 🚀 React Learning Journey - Episode 8: Dive Deep into `useEffect` Hook

## 📌 Introduction

The `useEffect` Hook is one of the most powerful hooks in React, allowing us to perform side effects in function components. Side effects can include:

- Fetching data from an API
- Subscribing to events
- Manipulating the DOM
- Running timers (e.g., `setTimeout` or `setInterval`)

In this episode, we will explore how `useEffect` works, its different use cases, and best practices.

---

## 🎯 What is the `useEffect` Hook?

The `useEffect` Hook lets you perform side effects in functional components. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` used in class components.

### **Syntax:**

```javascript
useEffect(() => {
  // Side effect logic
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);
```

- The first argument is a function where the side effect logic is written.
- The second argument is an array of dependencies that determine when the effect should run.
- The cleanup function (optional) runs when the component unmounts or before re-running the effect.

---

## 🛠️ `useEffect` Mechanism & API Call Example

When loading data from an API, there are **two main mechanisms**:

1. **App Load -> API call -> Render Fetched Data**

   - API data is fetched before rendering the UI.
   - Ideal for cases where users should see the data immediately.

2. **App Load -> Render -> API call -> Render Fetched Data (E.g., Load Skeleton)**
   - The app renders a skeleton first while the API request is in progress.
   - Improves user experience by displaying a loading state before data appears.

To achieve this, we use the `useEffect` Hook.

### **Example 1: Fetching Data on Component Mount**

```javascript
import { useState, useEffect } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); // Empty dependency array runs this effect only on mount

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
```

### **Explanation:**

- `useEffect` runs only **once** after the component mounts.
- `fetch()` API call retrieves data from `https://fakestoreapi.com/products`.
- Once the data is received, `setData(json)` updates the state, causing the component to re-render with the new data.

---

## 🛠️ Different `useEffect` Use Cases

### 1️⃣ **Run Effect on Every Render**

```javascript
useEffect(() => {
  console.log("Component re-rendered!");
});
```

- No dependency array → Runs after every render.
- Useful for debugging but can cause performance issues if not handled properly.

### 2️⃣ **Run Effect Only Once (On Mount)**

```javascript
useEffect(() => {
  console.log("Component Mounted!");
}, []);
```

- Empty dependency array → Runs **only** when the component mounts.
- Ideal for API calls, subscriptions, and initial setups.

### 3️⃣ **Run Effect When a Dependency Changes**

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

- Runs **only** when `count` changes.
- Useful for updating UI elements, syncing with local storage, etc.

### 4️⃣ **Cleanup Function (Component Unmounting)**

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Interval Running...");
  }, 1000);

  return () => {
    clearInterval(interval); // Cleanup when component unmounts
    console.log("Interval Cleared!");
  };
}, []);
```

- Cleanup function prevents memory leaks.
- Useful for unsubscribing from listeners or stopping background tasks.

---

## ❌ Common Mistakes with `useEffect`

### 1️⃣ **Infinite Loop** 🚨

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1); // ❌ Causes infinite loop!
}, [count]);
```

- The state updates on every render, causing an infinite loop.
- **Fix:** Use a conditional check inside `useEffect` or avoid direct state modification.

### 2️⃣ **Forgetting Cleanup Function** 🧹

```javascript
useEffect(() => {
  window.addEventListener("resize", () => console.log("Resized"));
}, []);
```

- This adds multiple event listeners each time the component re-renders.
- **Fix:** Remove the event listener in the cleanup function.

```javascript
useEffect(() => {
  const handleResize = () => console.log("Resized");
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

---

## 🎯 Key Takeaways

✔ `useEffect` is used to handle side effects like API calls, event listeners, and timers.  
✔ Runs **on mount**, **on update**, or **on unmount** based on the dependency array.  
✔ Always **clean up** event listeners, intervals, or subscriptions to prevent memory leaks.  
✔ Avoid **infinite loops** by ensuring state updates don't trigger `useEffect` indefinitely.

---

## 📌 Conclusion

Mastering `useEffect` is crucial for building dynamic, efficient, and performant React applications. By understanding its behavior, dependencies, and cleanup functions, you can optimize component behavior and prevent unnecessary re-renders.

---

🔗 **Further Reading:**

- [React Docs - useEffect](https://react.dev/reference/react/useEffect)
- [React Hooks Best Practices](https://reactjs.org/docs/hooks-rules.html)
- [Handling Side Effects in React](https://www.freecodecamp.org/news/understanding-react-useeffect/)

Happy Coding! 🎉
