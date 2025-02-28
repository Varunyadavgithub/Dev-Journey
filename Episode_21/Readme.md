# **React Learning Journey - Episode 21: Redux Toolkit for State Management**

## **Introduction**

State management is a crucial part of any React application, especially as the app grows in complexity. In this episode, we dive into **Redux Toolkit**, a modern and recommended approach to using Redux in React applications.

## **What is Redux Toolkit?**

Redux Toolkit (RTK) is the official, opinionated way to write Redux logic efficiently. It simplifies Redux setup and minimizes boilerplate code, making state management easier and more intuitive.

### **Why Use Redux Toolkit?**

- Reduces boilerplate code compared to traditional Redux.
- Provides built-in best practices for Redux applications.
- Supports efficient state updates with Immer (a library for immutable state updates).
- Includes built-in middleware like **Redux Thunk** for handling asynchronous logic.
- Optimized for performance and better developer experience.

## **Setting Up Redux Toolkit in a React Application**

To get started with Redux Toolkit, follow these steps:

### **Step 1: Install Redux Toolkit and React-Redux**

In your React project, install the necessary dependencies using npm or yarn:

```sh
npm install @reduxjs/toolkit react-redux
```

OR

```sh
yarn add @reduxjs/toolkit react-redux
```

### **Step 2: Create a Redux Slice**

A **slice** in Redux Toolkit is a collection of Redux reducer logic and actions for a specific feature in the app.

#### **Example: Counter Slice**

Create a new file `counterSlice.js` inside a `features` folder:

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
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
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### **Step 3: Configure the Store**

Create a Redux store and integrate the slice reducer.

In `store.js`:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

### **Step 4: Provide the Store to React App**

Wrap your main `App.js` or `index.js` with the **Provider** from `react-redux`.

In `index.js`:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### **Step 5: Use Redux State and Actions in Components**

Now, use Redux state and actions in React components using the `useSelector` and `useDispatch` hooks.

#### **Example: Counter Component**

```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
```

### **Step 6: Adding Async Logic with Redux Toolkit**

For handling API calls or asynchronous actions, Redux Toolkit provides **createAsyncThunk**.

#### **Example: Fetching Data using createAsyncThunk**

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

const userSlice = createSlice({
  name: "users",
  initialState: { users: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
```

## **Some Important Terminologies**

---

## **1. What is a Redux Store?**

The **store** is a centralized place where the state of the entire application is managed. It allows different components to access the state and modify it using **actions** and **reducers**.

### **Your Store (`appStore.js`):**

```js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // slices
    cart: cartReducer,
  },
});

export default appStore;
```

### **Explanation:**

- `configureStore()` – This is a Redux Toolkit function that creates a Redux store with built-in best practices.
- `reducer` – The store requires reducers to manage different pieces of state.
- `cartReducer` – This is imported from `cartSlice.js` and is responsible for managing the cart's state.

---

## **2. What is a Slice?**

A **slice** is a portion of the Redux store that manages a specific feature of the application. Each slice contains:

- A piece of state (initial state)
- Reducer functions to modify the state
- Actions that trigger the reducers

### **Your Cart Slice (`cartSlice.js`):**

```js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    // actions
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearItems: (state, _) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
```

### **Explanation:**

1. `createSlice()` – This function helps create a Redux slice, automatically generating actions and reducers.
2. `name: "cart"` – This defines the slice name, which will be used internally in Redux.
3. `initialState` – The initial state of the cart. In this case, it's an empty `cartItems` array.
4. `reducers` – This object contains the logic for modifying the state.

---

## **3. What is an Action?**

An **action** is an object that describes a change in the state. It usually contains:

- A `type` (which slice and reducer should handle it)
- A `payload` (optional data sent with the action)

### **Your Actions:**

```js
export const { addItem, removeItem, clearItems } = cartSlice.actions;
```

Each function modifies the `cartItems` array:

1. `addItem(state, action)`

   - **Action Type**: `"cart/addItem"`
   - **Effect**: Adds a new item to the cart by pushing the payload to `cartItems`.
   - **Example Usage**:
     ```js
     dispatch(addItem({ id: 1, name: "Laptop", price: 1000 }));
     ```
   - **State Change**:
     ```js
     {
       cartItems: [{ id: 1, name: "Laptop", price: 1000 }];
     }
     ```

2. `removeItem(state, action)`

   - **Action Type**: `"cart/removeItem"`
   - **Effect**: Removes an item from the cart by filtering out the item with a matching `id`.
   - **Example Usage**:
     ```js
     dispatch(removeItem({ id: 1 }));
     ```
   - **State Change**:
     ```js
     {
       cartItems: [];
     }
     ```

3. `clearItems(state, _)`
   - **Action Type**: `"cart/clearItems"`
   - **Effect**: Clears all items from the cart.
   - **Example Usage**:
     ```js
     dispatch(clearItems());
     ```
   - **State Change**:
     ```js
     {
       cartItems: [];
     }
     ```

---

## **4. What is a Reducer?**

A **reducer** is a function that takes the current state and an action, then returns the new state.

### **Your Reducers:**

```js
export default cartSlice.reducer;
```

- The reducer handles state changes based on dispatched actions.
- It modifies `cartItems` based on the action type (add, remove, clear).

---

## **5. Connecting Store with React**

To use the store in a React application, follow these steps:

### **Step 1: Provide the Store to React App**

Wrap your app with the `Provider` component in `index.js`:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./appStore";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
```

### **Step 2: Using Redux State and Dispatching Actions**

Use the `useSelector` and `useDispatch` hooks inside components.

#### **Example: Cart Component**

```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItems } from "./cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeItem({ id: item.id }))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => dispatch(addItem({ id: 2, name: "Phone", price: 500 }))}
      >
        Add Phone
      </button>
      <button onClick={() => dispatch(clearItems())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
```

---

## **Summary**

| Concept         | Explanation                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| **Store**       | A centralized location that manages the application's state.                               |
| **Slice**       | A feature-based state management unit in Redux Toolkit that contains actions and reducers. |
| **Action**      | An object that describes an event that modifies the state.                                 |
| **Reducer**     | A function that handles state updates based on dispatched actions.                         |
| **useSelector** | A hook that allows components to access Redux state.                                       |
| **useDispatch** | A hook that allows components to dispatch actions to modify the Redux state.               |

By using Redux Toolkit, you can manage application state efficiently with less boilerplate and better performance.

---

### **Conclusion**

Redux Toolkit simplifies state management in React applications by reducing boilerplate and providing a structured way to manage application state. By following this approach, you can efficiently manage global state, improve performance, and enhance code maintainability.

### **Next Steps**

- Implement **Async Thunks** using `createAsyncThunk` for API calls.
- Use **Middleware** for logging and debugging Redux state changes.
- Implement **Persisting State** using `redux-persist`.
