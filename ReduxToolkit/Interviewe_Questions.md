# 🧠 Interview-Level Understanding (Redux & Redux Toolkit)

Below are **commonly asked interview questions**, divided into **Easy, Intermediate, and Advanced**, with clear answers.

---

# 🟢 Easy Level Questions

### 1️⃣ What problem does Redux solve?

Redux solves **complex state management problems** by centralizing application state into a single store, making it predictable and easier to debug.

---

### 2️⃣ What is Single Source of Truth?

It means the **entire application state is stored in one central store**, rather than scattered across multiple components.

---

### 3️⃣ What is Unidirectional Data Flow?

Data flows in one direction:

UI → Dispatch Action → Reducer → Store → UI Updates

This makes state predictable and easier to trace.

---

### 4️⃣ Difference between `useState` and Redux?

| useState              | Redux                  |
| --------------------- | ---------------------- |
| Local to a component  | Global state           |
| Good for small apps   | Good for large apps    |
| No middleware support | Supports middleware    |
| Hard to share deeply  | Easy to share anywhere |

- 👉 Use `useState` for simple/local state.
- 👉 Use Redux for global/complex state.

---

### 5️⃣ What is an Action?

An action is a plain JavaScript object that describes what happened.

```js
{
  type: "counter/increment";
}
```

---

### 6️⃣ What is a Reducer?

A reducer is a function that takes **current state + action** and returns a **new updated state**.

---

# 🟡 Intermediate Level Questions

### 7️⃣ Why Redux Toolkit over traditional Redux?

Redux Toolkit:

- Reduces boilerplate code
- Uses `createSlice`
- Includes Immer by default
- Has built-in `createAsyncThunk`
- Configures DevTools automatically

Traditional Redux required:

- Action types
- Action creators
- Switch statements
- Manual store setup

Redux Toolkit simplifies everything.

---

### 8️⃣ What is a Slice?

A slice:

- Combines state
- Reducers
- Action creators

All in one place.

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});
```

---

### 9️⃣ What is Immer?

Immer allows you to write "mutating logic" like:

```js
state.value += 1;
```

But internally it creates an **immutable copy**, so Redux principles are not broken.

Redux Toolkit uses Immer automatically.

---

### 🔟 What is `createAsyncThunk`?

It is used to handle **asynchronous logic** like API calls.

Example:

```js
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("/api/users");
  return response.json();
});
```

It automatically generates:

- pending
- fulfilled
- rejected

states.

---

# 🔴 Advanced Level Questions

### 1️⃣1️⃣ How does Redux maintain predictability?

Redux ensures predictability because:

- State is read-only
- Only actions can change state
- Reducers are pure functions

No side effects inside reducers.

---

### 1️⃣2️⃣ What are Middleware in Redux?

Middleware sits between:
Dispatch → Reducer

Used for:

- Logging
- API calls
- Async operations
- Error handling

Example:

- Redux Thunk
- Redux Logger

---

### 1️⃣3️⃣ Explain Redux Architecture

Flow:

1. User interacts with UI
2. Event handler dispatches action
3. Store sends action to reducer
4. Reducer updates state
5. Store notifies React
6. UI re-renders

---

### 1️⃣4️⃣ How is Redux Toolkit internally different from Redux?

Redux Toolkit:

- Uses `configureStore`
- Automatically adds middleware
- Enables Redux DevTools
- Uses Immer
- Encourages slice-based architecture

It is the official recommended way by Redux team.

---

### 1️⃣5️⃣ What are Normalized States?

In complex apps:
Instead of storing nested objects, we normalize data:

❌ Bad:

```js
posts: [{ id: 1, user: { id: 1, name: "Varun" } }];
```

✅ Good:

```js
posts: {
  byId: { 1: { id: 1, userId: 1 } },
  allIds: [1]
}
users: {
  byId: { 1: { id: 1, name: "Varun" } }
}
```

This improves:

- Performance
- Scalability
- Easier updates

---

# 🎯 Most Frequently Asked in Interviews

If interviewer wants to test depth, they usually ask:

- Difference between Redux and Context API?
- Why reducers must be pure?
- Can we mutate state in Redux Toolkit?
- What happens if we dispatch inside reducer?
- When NOT to use Redux?

---

# 🧠 Bonus: When NOT to Use Redux

- Small app
- No shared state
- Only simple UI state
- No complex data flow

Redux is powerful but not always necessary.