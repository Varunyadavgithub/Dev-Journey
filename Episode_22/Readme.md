# **React Learning Journey - Episode 22: useRef, useMemo Hooks in React.js**

## **Introduction**

In today's learning session, we explored two important React hooks: `useRef` and `useMemo`. These hooks help optimize performance and manage references efficiently within a React application. Let's dive deep into their purpose, use cases, and implementation.

---

## **1. Understanding useRef Hook**

### **What is useRef?**

- `useRef` is a React hook that provides a way to persist values across renders **without causing re-renders**.
- It can store references to DOM elements or maintain values that don't trigger re-renders when changed.

### **Common Use Cases**

1. **Accessing and Manipulating DOM Elements**
2. **Storing Mutable Variables Without Re-rendering**
3. **Managing Timers and Intervals**

### **Example 1: Accessing a DOM Element**

```jsx
import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
```

#### **Explanation:**

- `useRef` stores a reference to the input element (`inputRef`).
- Clicking the button sets the focus on the input field without triggering a re-render.

### **Example 2: Storing Values Without Re-rendering**

```jsx
import React, { useRef, useState } from "react";

const Counter = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const increment = () => {
    countRef.current += 1; // Doesn't cause re-render
    setCount(count + 1); // Causes re-render
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

#### **Key Points:**

- `countRef` persists its value across renders but does not trigger a re-render.
- `count` (state) causes a re-render whenever updated.

---

## **2. Understanding useMemo Hook**

### **What is useMemo?**

- `useMemo` is a React hook that **memoizes** the result of a function to avoid unnecessary recalculations.
- It helps **optimize performance** by recomputing a value **only when dependencies change**.

### **Common Use Cases**

1. **Optimizing Expensive Calculations**
2. **Preventing Unnecessary Recalculations**
3. **Improving Performance in Large Applications**

### **Example 1: Optimizing Expensive Calculations**

```jsx
import React, { useState, useMemo } from "react";

const ExpensiveCalculation = ({ num }) => {
  const factorial = (n) => {
    console.log("Calculating factorial...");
    return n <= 1 ? 1 : n * factorial(n - 1);
  };

  const memoizedFactorial = useMemo(() => factorial(num), [num]);

  return (
    <div>
      <p>
        Factorial of {num}: {memoizedFactorial}
      </p>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <ExpensiveCalculation num={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App;
```

#### **Explanation:**

- The `factorial` function is **expensive** (recursive function call).
- `useMemo` ensures it **only recalculates** when `num` changes, preventing unnecessary computations.

### **Example 2: Memoizing a Computed Value**

```jsx
import React, { useState, useMemo } from "react";

const List = ({ items }) => {
  const sortedItems = useMemo(() => {
    console.log("Sorting items...");
    return [...items].sort();
  }, [items]);

  return (
    <ul>
      {sortedItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [items, setItems] = useState(["Banana", "Apple", "Mango"]);
  return (
    <div>
      <List items={items} />
    </div>
  );
};

export default App;
```

#### **Key Points:**

- Sorting is an expensive operation.
- `useMemo` ensures sorting happens **only when `items` change**.

---

## **Comparison of useRef and useMemo**

| Hook      | Purpose                                                                 | Triggers Re-render? | Use Case                                                                 |
| --------- | ----------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------ |
| `useRef`  | Stores references to DOM elements or values that persist across renders | ❌ No               | Managing input focus, storing mutable values, avoiding re-renders        |
| `useMemo` | Memoizes a computed value to avoid unnecessary recalculations           | ❌ No               | Optimizing expensive calculations, preventing unnecessary function calls |

---

## **Conclusion**

- `useRef` helps in **managing DOM references and mutable values** without causing re-renders.
- `useMemo` optimizes performance by **memoizing computed values** to prevent redundant calculations.
- Both hooks play a crucial role in improving **performance and efficiency** in React applications.

### **Next Steps**

- Explore `useCallback` (closely related to `useMemo`).
- Combine `useRef` with event listeners and animations.
- Use `useMemo` in real-world API calls to optimize rendering.
