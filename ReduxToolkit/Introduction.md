# 📦 React Redux Toolkit – Complete Notes

## 📌 Introduction

Redux Toolkit (RTK) is the **official and recommended way** to write Redux logic.

It was introduced to:

- Reduce boilerplate code
- Simplify complex state management
- Improve developer experience
- Make Redux beginner-friendly

Redux Toolkit helps manage **global state** in React applications efficiently, predictably, and at scale.

---

# 🧠 Evolution of State Management in React

---

## 🟢 Phase 1 – React Local State (`useState`)

Initially, we managed state using:

```jsx
const [count, setCount] = useState(0);
```

This works perfectly for:

- Small applications
- Local component state

### ❌ Problems in Large Applications

1. Prop Drilling
   Passing props through multiple components.

   ```
   App → Parent → Child → GrandChild → DeepChild
   ```

2. Scattered State Logic
   State managed in different components → hard to track.

3. Hard Debugging
   No centralized state history.

4. Complex API Handling
   Managing loading + error + data in multiple components becomes messy.

---

## 🟡 Phase 2 – Classic Redux

Redux introduced:

- ✅ Single Global Store
- ✅ Predictable State Updates
- ✅ Unidirectional Data Flow
- ✅ DevTools Support
- ✅ Time Travel Debugging

Architecture:

```
UI → Dispatch → Action → Reducer → Store → UI
```

### ❌ Problems with Classic Redux

1. Too much boilerplate
2. Separate files for actions, reducers, types
3. Manual immutable updates
4. Hard for beginners

Example (Classic Redux):

```js
const INCREMENT = "INCREMENT";

const increment = () => ({
  type: INCREMENT,
});

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    default:
      return state;
  }
}
```

Too much code for simple logic 😵

---

## 🔵 Phase 3 – Redux Toolkit (Modern Redux)

Redux Toolkit keeps Redux powerful
But removes Redux complexity.

It provides:

- `configureStore()`
- `createSlice()`
- `createAsyncThunk()`
- Built-in Immer (for immutability)

---

# 🏗️ Redux Architecture (Data Flow)

Redux follows a **unidirectional data flow** pattern.

```
UI → Event Handler → Dispatch → Action → Reducer → Store → Updated State → UI Re-renders
```

---

## 🔁 Step-by-Step Flow

1. User interacts with UI.
2. Event handler runs.
3. `dispatch()` is called.
4. Action is sent.
5. Reducer processes action.
6. Store updates state.
7. UI re-renders automatically.

---

# 🧠 Core Concepts Explained (Detailed)

---

## 1️⃣ UI (User Interface)

The visible part of the React application.

```jsx
<button onClick={handleIncrement}>Increase</button>
```

---

## 2️⃣ Event Handler

Function triggered by user action (like click, submit, type, etc).

```jsx
const handleIncrement = () => {
  dispatch(increment());
};
```

---

## 3️⃣ Dispatch

Function used to send actions to Redux store.

```js
dispatch(increment());
```

Think of it as:

> "Hey Redux, something happened!"

---

## 4️⃣ Action

A plain JavaScript object describing what happened.

Example:

```js
{
  type: "counter/increment";
}
```

In RTK:

```js
increment();
```

RTK automatically generates the action type.

---

## 5️⃣ Reducer

A pure function that updates state based on action.

```js
(state, action) => {
  state.value += 1;
};
```

Rules:

- Must be pure
- No direct mutation (RTK uses Immer internally)

---

## 6️⃣ Store

The central container that holds entire app state.

```js
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

There is only **one store** per application.

---

## 7️⃣ State

The current data inside Redux.

Example:

```js
{
  counter: {
    value: 0;
  }
}
```

When state changes → UI updates automatically.

---

# 🧩 Redux Toolkit Important Features

---

## ✅ configureStore()

- Simplifies store setup
- Enables DevTools automatically
- Combines reducers easily

---

## ✅ createSlice()

Automatically creates:

- Initial state
- Reducers
- Actions

Example:

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## ✅ useSelector()

Access state from store.

```js
const count = useSelector((state) => state.counter.value);
```

---

## ✅ useDispatch()

Send actions.

```js
const dispatch = useDispatch();
```

---

## ✅ createAsyncThunk() (Async Handling)

Used for API calls.

```js
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("/api/users");
  return response.json();
});
```

Handles:

- pending
- fulfilled
- rejected

Clean and structured async logic.

---

# 🛒 Real-World Example (E-Commerce Cart)

Without Redux:

- Cart in Navbar
- Cart in Product Page
- Cart in Checkout
- Cart in Order Summary

State must be shared everywhere.

With Redux Toolkit:

- Single cart slice
- All components access same cart state
- Clean & predictable updates

---

# 📂 Recommended Folder Structure

```
src/
├── redux/
│   ├── features/
│   │   ├── counter/
│   │   │   └── counterSlice.js
│   │   └── cart/
│   │       └── cartSlice.js
│   └── store.js
├── components/
└── pages/
```

---

# 📊 Visual Architecture Diagram (Redux Flow)

```
                    ┌────────────┐
                    │     UI     │
                    └──────┬─────┘
                           │
                           ▼
                 ┌────────────────┐
                 │  Event Handler │
                 └──────┬─────────┘
                        │
                        ▼
                    ┌───────────┐
                    │  Dispatch │
                    └──────┬────┘
                           │
                           ▼
                    ┌───────────┐
                    │   Action  │
                    └──────┬────┘
                           │
                           ▼
        ┌───────────────────────────────────┐
        │               Store               │
        │                                   │
        │     ┌─────────┐     ┌─────────┐   │
        │     │ Reducer │     │ Reducer │   │
        │     └─────────┘     └─────────┘   │
        │            ┌─────────┐            │
        │            │ Reducer │            │
        │            └─────────┘            │
        └────────────────┬──────────────────┘
                         │
                         ▼
                 ┌────────────────┐
                 │  Updated State │
                 └──────┬─────────┘
                        │
                        ▼
                   UI Re-render
```

---

# 🆚 Classic Redux vs Redux Toolkit

| Classic Redux            | Redux Toolkit                  |
| ------------------------ | ------------------------------ |
| Too much boilerplate     | Minimal code                   |
| Manual immutable updates | Built-in Immer                 |
| Separate files           | createSlice handles everything |
| Complex setup            | configureStore simplifies      |
| Hard for beginners       | Beginner-friendly              |

---

# 🚀 Why Use Redux Toolkit?

- Reduces boilerplate
- Built-in Immer
- DevTools integration
- Better performance
- Clean architecture
- Scalable for enterprise apps
- Official Redux recommendation

---

# ⚖️ When To Use Redux?

Use Redux when:

- Multiple components share same state
- State logic is complex
- Large-scale applications
- Need predictable debugging

Avoid Redux when:

- Only local state is needed
- App is very small

---

# 🏁 Conclusion

Redux Toolkit modernizes Redux by:

- Reducing complexity
- Improving readability
- Making state predictable
- Simplifying large-scale state management

Think of it like this:

```
Redux = Powerful Engine
Redux Toolkit = Modern Car built on that engine
```
