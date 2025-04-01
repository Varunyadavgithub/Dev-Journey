## 🚀 React Learning Journey - Episode 11: Dynamic Routing in React.

## 📌 Introduction

Dynamic Routing in React allows us to navigate between different pages and update content dynamically based on URL parameters. This is essential for creating interactive and user-friendly web applications.

In this episode, we explored how to implement **dynamic routing** using **React Router DOM**, fetch and display data dynamically, and improve user experience with **Shimmer UI (Skeleton Loader)**.

---

## 🔥 What is Dynamic Routing?

Unlike static routing where all routes are predefined, **dynamic routing** allows us to render content dynamically based on URL parameters. This is particularly useful for pages like product details, user profiles, and blog posts, etc.

For example, in an e-commerce website:

- `/product/1` → Displays details of Product 1
- `/product/2` → Displays details of Product 2

We achieve this using `react-router-dom` and `useParams()`.

---

## 🛠️ Setting Up React Router

### 1️⃣ Installing `react-router-dom`

To enable routing in React, install the required package:

```sh
npm install react-router-dom
```

### 2️⃣ Configuring Routes

We use `createBrowserRouter` and `RouterProvider` to define routes. The main routes include:

- `/` → Displays all products
- `/product/:productId` → Displays specific product details
- `/men`, `/women`, `/kids` → Category pages
- `/cart` → Shopping cart

The `Outlet` component is used to render nested routes inside a parent layout containing **Navbar** and **Footer**.

---

## 🔄 Implementing Dynamic Routing

### 3️⃣ Creating a Dynamic Product Details Page

To dynamically fetch product details based on the `productId`, we:

1. Use `useParams()` to extract `productId` from the URL.
2. Fetch product details using `useEffect()` when the component mounts.
3. Display product details or show a **Shimmer UI** while fetching.

```jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";

export const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return singleProduct === null ? (
    <Skeleton />
  ) : (
    <div>
      <img src={singleProduct.image} alt={singleProduct.title} />
      <h1>{singleProduct.title}</h1>
      <p>Price: ${singleProduct.price}</p>
      <p>{singleProduct.description}</p>
    </div>
  );
};
```

---

### 4️⃣ Navigating Between Pages

We use `<Link>` instead of `<a>` to navigate without refreshing the page.

Example:

```jsx
<Link to={`/product/${product.id}`}>
  <Product product={product} />
</Link>
```

This ensures smooth navigation and maintains state between page transitions.

---

### 5️⃣ Improving User Experience with Shimmer UI (Skeleton Loader)

While fetching data, instead of showing a blank screen, we display a **Skeleton Loader** to improve the user experience.

```jsx
if (singleProduct === null) {
  return <Skeleton />;
}
```

This prevents layout shifts and provides a smoother experience while waiting for API data.

---

## 🎯 Summary

✅ **Dynamic Routing** renders content dynamically based on URL parameters.
✅ **useParams()** extracts route parameters.
✅ **useEffect()** fetches dynamic data when the component mounts.
✅ **Shimmer UI** enhances user experience during API fetch.
✅ **<Link>** enables seamless navigation between pages.
