# 🚀 React Learning Journey - Episode 20: Props Drilling & Context API in React

**# 1. Props Drilling in React**

## What is Props Drilling?

Props drilling refers to the process of passing data (props) from a parent component down to deeply nested child components through multiple intermediate components. This happens when a deeply nested component requires access to some data but does not have direct access to the state or props of its parent component.

## Understanding Props Drilling with an Example

### Component Structure:

- `ComponentA` (Parent) contains user data.
- `ComponentA` passes user data to `ComponentB`.
- `ComponentB` then passes the same data to `ComponentC`.
- `ComponentC` finally consumes the data.

### Implementation:

#### **ComponentA (Parent Component)**

```jsx
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const user = {
    name: "Varun",
    email: "varun@gmail.com",
  };
  return (
    <div className="bg-red-200 p-4 rounded-lg border-2 border-red-500">
      <h1 className="text-center mb-2">
        I am Component A (calling Component B)
      </h1>
      <div className="p-4 rounded-lg">
        <h2 className="text-red-700">User Details coming from Component A</h2>
        <h2>User Name: {user.name}</h2>
        <h2>User Email: {user.email}</h2>
        <ComponentB user={user} />
      </div>
    </div>
  );
};

export default ComponentA;
```

#### **ComponentB (Intermediate Component)**

```jsx
import ComponentC from "./ComponentC";

const ComponentB = ({ user }) => {
  return (
    <div className="bg-blue-200 p-4 rounded-lg border-2 border-blue-500">
      <h1 className="text-center mb-2">
        I am Component B (calling Component C)
      </h1>
      <div className="p-4 rounded-lg">
        <h2 className="text-red-700">User Details coming from Component A</h2>
        <h2>User Name: {user.name}</h2>
        <h2>User Email: {user.email}</h2>
        <ComponentC user={user} />
      </div>
    </div>
  );
};

export default ComponentB;
```

#### **ComponentC (Final Component)**

```jsx
const ComponentC = ({ user }) => {
  return (
    <div className="bg-yellow-200 p-4 rounded-lg border-2 border-yellow-500">
      <h1 className="text-center mb-2">I am Component C</h1>
      <div className="p-4 rounded-lg">
        <h2 className="text-red-700">User Details coming from Component B</h2>
        <h2>User Name: {user.name}</h2>
        <h2>User Email: {user.email}</h2>
      </div>
    </div>
  );
};

export default ComponentC;
```

## Problems with Props Drilling

- **Code Redundancy:** Passing the same props through multiple levels increases code duplication.
- **Component Coupling:** Intermediary components become tightly coupled with the data they do not directly use.
- **Difficult Maintenance:** Making changes in deeply nested components requires modifying multiple components.

## Solutions to Props Drilling

### 1. **Context API**

React Context API allows data to be shared across components without passing props explicitly at each level.

### 2. **State Management Libraries (Redux, Zustand, Recoil, etc.)**

These libraries help manage global states more efficiently and reduce excessive prop passing.

Props drilling is a fundamental React concept, but when dealing with deeply nested components, better state management techniques like Context API or Redux should be considered for cleaner and maintainable code.

---

**# 2. Understanding Context API in React**

## Introduction to Context API

Context API is a built-in feature in React that allows us to manage state globally and avoid prop drilling. It provides a way to share values like user authentication, themes, and other global states across multiple components without explicitly passing props down the component tree.

## Creating a Store using Context API

To create a Context store, we use the `createContext` method from React. The store acts as a centralized place to hold and manage shared data.

```javascript
import { createContext } from "react";

const UserContext = createContext({
  name: "Anil",
  address: "Mumbai",
  email: "anil@gmail.com",
});

export default UserContext;
```

This creates a UserContext that holds default user information such as `name`, `address`, and `email`.

## Providing Context in the Application

To provide access to the Context store, we wrap our application components inside a `Provider`. The `Provider` allows us to update and share state globally.

### Implementation in App Component

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { Error } from "./pages/Error";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Functional from "./components/Functional";
import ClassBased from "./components/ClassBased";
import Home from "./pages/Home";
import UserContext from "./utils/UserContext";

const App = () => {
  const [userName, setUserName] = useState("Anil");
  const [userAddress, setUserAddress] = useState("Mumbai");
  const [userEmail, setUserEmail] = useState("anil@gmail.com");

  return (
    <UserContext.Provider
      value={{
        name: userName,
        setUserName,
        address: userAddress,
        setAddress: setUserAddress,
        email: userEmail,
        setEmail: setUserEmail,
      }}
    >
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/functional", element: <Functional /> },
      { path: "/class-based", element: <ClassBased /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

## Using Context in a Functional Component

In a functional component, we use the `useContext` hook to access the context values.

```javascript
import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Functional = () => {
  const [count, setCount] = useState(0);
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Hello, from Functional Component</h1>
      <h2>User Data from Store</h2>
      <p>Name: {user.name}</p>
      <p>Address: {user.address}</p>
      <p>Email: {user.email}</p>

      <input
        type="text"
        value={user.name}
        onChange={(e) => user.setUserName(e.target.value)}
      />
      <input
        type="text"
        value={user.address}
        onChange={(e) => user.setAddress(e.target.value)}
      />
      <input
        type="email"
        value={user.email}
        onChange={(e) => user.setEmail(e.target.value)}
      />
    </div>
  );
};

export default Functional;
```

## Using Context in a Class-Based Component

In a class-based component, we use the `Consumer` component to access the context values.

```javascript
import React from "react";
import UserContext from "../utils/UserContext";

class ClassBased extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1>Update User Data</h1>
          <UserContext.Consumer>
            {(user) => (
              <div>
                <p>Name:</p>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => user.setUserName(e.target.value)} // Directly update context
                />
                <p>Address:</p>
                <input
                  type="text"
                  value={user.address}
                  onChange={(e) => user.setAddress(e.target.value)} // Directly update context
                />
                <p>Email:</p>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => user.setEmail(e.target.value)} // Directly update context
                />
              </div>
            )}
          </UserContext.Consumer>
        </div>
        <div>
          <h1>Hello, from Class-Based Component</h1>
          <UserContext.Consumer>
            {(user) => (
              <div>
                <p>Name: {user.name}</p>
                <p>Address: {user.address}</p>
                <p>Email: {user.email}</p>
              </div>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default ClassBased;
```

## Updating the Context Data

In the `Functional` component, we allow users to modify the stored data using input fields. This updates the global context state using setter functions (`setUserName`, `setAddress`, and `setEmail`).

Similarly, in the class-based component, the `Consumer` is used to fetch and display updated values from the store.

## Conclusion

- Context API provides a way to avoid prop drilling by allowing data to be shared across components.
- We create a store using `createContext` and provide values using the `Provider`.
- In functional components, we use `useContext`, while in class-based components, we use `Consumer`.
- The Context API is useful for managing global state, such as user authentication and themes, without requiring external state management libraries like Redux.

By implementing the Context API effectively, we can make our React applications more scalable and maintainable.
