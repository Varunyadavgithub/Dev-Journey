# 🚀 React Learning Journey - Episode 9: Conditional Rendering & Shimmer UI (Skeleton) in React

## 1. What is Conditional Rendering?
Conditional rendering in React allows us to control what gets displayed in the UI based on a certain condition. This is useful for scenarios like loading states, authentication, or displaying different views based on user interactions.

### Example of Conditional Rendering:
```javascript
const isLoggedIn = true;

const Greeting = () => {
  return isLoggedIn ? <h1>Welcome back, User!</h1> : <h1>Please log in.</h1>;
};
```
- If `isLoggedIn` is `true`, it shows "Welcome back, User!"
- If `isLoggedIn` is `false`, it shows "Please log in."

---

## 2. Implementing Conditional Rendering in API Calls
When fetching data from an API, we often want to display a **loading state** before the data is available. This can be achieved using conditional rendering.

### Example:
```javascript
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <ProductList products={products} />}
    </div>
  );
};
```
Here, `loading` determines whether to show the **Loading...** message or display the fetched products.

---

## 3. What is a Shimmer UI (Skeleton)?
A **Shimmer UI** (also known as a skeleton screen) is a placeholder UI that mimics the layout of actual content before the data is loaded. This improves the user experience by making the application feel faster and smoother.

### Example of a Shimmer UI:
```javascript
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};
```

#### Styling for the Shimmer UI:
```css
.shimmer-container {
  display: flex;
  gap: 10px;
}

.shimmer-card {
  width: 200px;
  height: 300px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
```

---

## 4. Implementing Shimmer UI in API Calls
Instead of just showing "Loading...", we can use the **Shimmer UI** while the data is loading.

### Example:
```javascript
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { // Simulating network delay
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? <Shimmer /> : <ProductList products={products} />}
    </div>
  );
};
```
Here, instead of a simple "Loading...", we show the **Shimmer UI** before displaying the actual data.

---

## 5. Summary of Concepts Learned
1. **Conditional Rendering**: Showing different UI elements based on a condition.
2. **Handling API Loading States**: Using state variables like `loading`.
3. **Shimmer UI (Skeleton)**: A visually appealing loading placeholder before actual data appears.
4. **Improving User Experience**: Skeleton screens make the app feel smoother.

---

This episode covered how to enhance the user interface using **conditional rendering** and **shimmer UI**. Mastering these techniques will help create professional and interactive React applications! 🚀