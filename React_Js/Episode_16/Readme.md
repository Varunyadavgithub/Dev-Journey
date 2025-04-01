# 🚀 **React Learning Journey - Episode 16: Custom Hooks, Suspense, Lazy Loading**

Today, I explored three important concepts in React:  
✅ **Custom Hooks**  
✅ **Lazy Loading & Code Splitting**  
✅ **Suspense for Handling Lazy-Loaded Components**

These techniques help us write cleaner, more efficient, and performance-optimized React applications.

---

## **📌 Custom Hooks in React**

### **What is a Custom Hook?**

A **Custom Hook** in React is a reusable function that contains logic related to stateful behavior, such as API calls or form handling. It follows the naming convention `useSomething` (e.g., `useGetSingleProduct`) and allows us to **keep components clean** by moving logic out of them.

### **Why Use Custom Hooks?**

✅ Keeps components **clean** and **organized**  
✅ Allows **reusability** across multiple components  
✅ Helps in **separating concerns**

---

## **🛠 Example: Custom Hook for Fetching a Product**

I created a **custom hook** `useGetSingleProduct` to fetch product details from an API.

### **🔹 Code for `useGetSingleProduct.js`**

```jsx
import { useEffect, useState } from "react";

const useGetSingleProduct = (productId) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchSingleProduct();
  }, [productId]);

  const fetchSingleProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Error while fetching data from server.");
      }
      const resData = await response.json();
      setProduct(resData);
    } catch (error) {
      console.log("Error while fetching product.", error);
    }
  };

  return product;
};

export default useGetSingleProduct;
```

---

### **✅ How Does It Work?**

- `useEffect()` runs **once** when `productId` changes and fetches the product details.
- The fetched data is **stored in state (`setProduct`)**.
- The **returned product** can be used in any component.

---

## **📌 Using the Custom Hook in a Component**

Now, let's see how I used this **custom hook** in my `ProductsDetails` component.

### **🔹 Code for `ProductsDetails.js`**

```jsx
import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import useGetSingleProduct from "../hooks/useGetSingleProduct";

export const ProductsDetails = () => {
  const { productId } = useParams();
  const singleProduct = useGetSingleProduct(productId);

  if (!singleProduct) return <Skeleton />;

  const { image, title, description, price, category } = singleProduct;

  return (
    <div className="product-details">
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <div className="product-info">
          <h1 className="product-title">{title}</h1>
          <p className="product-category">Category: {category}</p>
          <p className="product-price">Price: ${price}</p>
          <p className="product-description">{description}</p>
        </div>
      </div>
    </div>
  );
};
```

---

## **📌 Lazy Loading, Code Splitting & Dynamic Import in React**

### **🔹 What is Lazy Loading?**

Lazy loading is a **performance optimization technique** that allows us to **load components only when needed**, rather than loading everything upfront.

🚀 This helps **reduce initial bundle size** and improves **app performance**.

### **🔹 How to Implement Lazy Loading in React?**

React provides `lazy()` for dynamic imports and `Suspense` to handle loading states.

#### ✅ **Before Lazy Loading (Normal Import)**

```jsx
import Grocery from "./components/Grocery";
```

Here, **Grocery.js** is loaded **even if it's not used immediately**, increasing bundle size.

#### ✅ **After Lazy Loading**

```jsx
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery"));
```

Now, `Grocery.js` is **only loaded when needed**.

---

## **📌 Using Suspense for Handling Lazy-Loaded Components**

### **What is `Suspense`?**

- When we use `lazy()`, React **doesn’t load the component immediately**.
- `Suspense` provides a **fallback UI** (like a loading indicator) until the component loads.

### **🔹 Code for Lazy Loading Grocery Component**

```jsx
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Kids } from "./pages/Kids";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Cart } from "./pages/Cart";
import { Error } from "./pages/Error";
import { ProductCard } from "./components/ProductCard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ProductsDetails } from "./pages/ProductsDetails";

// Lazy Load Grocery Component
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:productId",
        element: <ProductsDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

---

## **📌 How Lazy Loading Works Here?**

✅ `lazy(() => import("./components/Grocery"))` → Loads `Grocery` **only when needed**.  
✅ `<Suspense fallback={<h1>Loading...</h1>}>` → Displays `"Loading..."` **until Grocery loads**.

### **🎯 Key Benefits of Lazy Loading**

- Reduces **initial page load time**
- Loads components **only when required**
- Optimizes **bundle size and performance**

---

## **📌 Summary: Key Takeaways**

| **Concept**      | **Explanation**                                                                 |
| ---------------- | ------------------------------------------------------------------------------- |
| **Custom Hooks** | Reusable logic extracted into separate functions (e.g., `useGetSingleProduct`). |
| **Lazy Loading** | Loads components **only when required** using `lazy()`.                         |
| **Suspense**     | Displays a fallback **while loading a lazy-loaded component**.                  |
| **Performance**  | Improves page load speed by reducing **initial bundle size**.                   |

---

## **📝 Interview Questions on These Topics**

### **1️⃣ What are Custom Hooks in React?**

👉 Custom hooks are **reusable functions** that **extract logic from components** to improve maintainability.

### **2️⃣ What is Lazy Loading in React?**

👉 Lazy Loading is a **code-splitting technique** that **loads components dynamically** when needed.

### **3️⃣ How does Suspense work in React?**

👉 Suspense **handles loading states** for lazy-loaded components by providing a **fallback UI**.

---

### **🔥 Final Thoughts**

By using **Custom Hooks, Lazy Loading, and Suspense**, we can make our React applications more **efficient, modular, and performance-optimized**. 🚀