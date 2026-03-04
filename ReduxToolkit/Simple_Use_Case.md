# 🧮 Redux Toolkit Counter App (Complete Frontend + Redux Explanation)

A modern counter application built using:

* ⚛️ React (Vite)
* 🛠 Redux Toolkit
* 🔄 React Redux
* 🎨 Custom CSS

This project demonstrates **complete frontend architecture integrated with Redux Toolkit** for global state management.

---

# 📌 Project Overview

This application allows users to:

* Increment counter
* Decrement counter
* Increment by custom amount
* Decrement by custom amount

The main goal of this project is to understand:

* How Redux Toolkit works
* How slices & reducers manage state
* How React connects with Redux
* How unidirectional data flow works

---

# 🏗️ Architecture Overview

Redux follows **Unidirectional Data Flow**:

```
User → UI → Event Handler → Dispatch → Action → Reducer → Store → UI Re-render
```

### Detailed Flow

1. User clicks button.
2. Event handler runs.
3. `dispatch()` sends action.
4. Reducer updates state.
5. Store saves new state.
6. React re-renders automatically.

---

# 📂 Project Structure

```
app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── redux/
│       ├── store.js
│       └── features/
│           └── counter/
│               └── counterSlilce.js
```

---

# ⚛️ Complete Frontend Code

---

# 1️⃣ index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redux Toolkit Counter App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

# 2️⃣ main.jsx (Entry Point)

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

### Explanation

* `createRoot()` initializes React.
* `Provider` connects Redux store to entire app.
* `store` becomes accessible in all components.

---

# 3️⃣ store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlilce";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### Explanation

* `configureStore()` creates Redux store.
* Registers `counter` slice.
* Enables Redux DevTools automatically.

---

# 4️⃣ counterSlilce.js

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
```

---

## 🧠 Slice Deep Explanation

A slice:

* Defines feature name
* Defines initial state
* Contains reducers
* Auto-generates actions

Example state:

```
{
  counter: {
    value: 0
  }
}
```

---

## 🔐 How Mutation Works

Even though we write:

```js
state.value += 1;
```

Redux Toolkit uses **Immer** internally
So state updates remain immutable.

---

# 5️⃣ App.jsx

```js
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./redux/features/counter/counterSlilce";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [amount, setAmount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>{count}</h1>

        <div className="actions">
          <button onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>

        <div className="controles">
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="controle-btn">
            <button
              onClick={() =>
                dispatch(incrementByAmount(Number(amount)))
              }
            >
              Increment By Amount
            </button>

            <button
              onClick={() =>
                dispatch(decrementByAmount(Number(amount)))
              }
            >
              Decrement By Amount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
```

---

# 6️⃣ index.css

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: #ffffff;
  background: linear-gradient(135deg, #1e1e2f, #2c2c3f);
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.card {
  background: #2f2f44;
  padding: 2.5rem;
  border-radius: 16px;
  width: 400px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

h1 {
  font-size: 3rem;
}

button {
  border-radius: 8px;
  border: none;
  padding: 0.6em 1.2em;
  cursor: pointer;
  background: #646cff;
  color: white;
}
```

---

# 🔄 Complete State Lifecycle Example

User clicks "Increment":

1. onClick triggers dispatch
2. Action: `{ type: "counter/increment" }`
3. Reducer runs
4. State updates
5. Store saves new state
6. useSelector detects change
7. Component re-renders

---

# 🧠 Key Concepts Covered

* Global State
* Single Source of Truth
* Slice-based architecture
* Reducers
* Actions
* Immer
* React-Redux Hooks
* Unidirectional Data Flow

---

# 🆚 useState vs Redux Toolkit

| useState      | Redux Toolkit    |
| ------------- | ---------------- |
| Local         | Global           |
| Hard to scale | Highly scalable  |
| No DevTools   | DevTools support |
| Hard to share | Easy sharing     |

---

# 🚀 How To Run

```bash
npm install
npm run dev
```

Visit:

```
http://localhost:5173
```

---

# 📈 How To Extend

You can extend by:

* Adding Reset Button
* Adding Multiple Slices
* Adding Async API (createAsyncThunk)
* Adding Middleware
* Persisting State

---

# 🏁 Final Summary

This project demonstrates complete modern frontend architecture:

```
React = UI Layer
Redux Toolkit = State Engine
Store = Frontend Database
Slice = Feature Module
Reducer = State Update Logic
```

It provides scalable, predictable, and maintainable state management.