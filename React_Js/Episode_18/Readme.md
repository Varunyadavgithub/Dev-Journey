# 🚀 **React Learning Journey - Episode 18: Higher Order Components (HOC)**

## **Introduction to Higher Order Components (HOC)**

A **Higher Order Component (HOC)** is a pattern in React that allows you to reuse component logic. It is a function that takes a component and returns a new component with additional functionality. HOCs do not modify the original component but instead "enhance" it with added behavior.

### **Why Use Higher Order Components?**

HOCs are useful for:

- **Reusability:** You can reuse component logic across different components without changing their structure.
- **Separation of Concerns:** HOCs allow you to separate the logic from UI components.
- **Code DRYness:** Avoid repeating logic in multiple places by centralizing it in a higher-order function.
- **Conditional Rendering:** You can conditionally add features, styles, or data to components depending on certain conditions (e.g., user authentication, loading state, etc.).

### **What is an HOC?**

An **HOC** is a function that:

- Takes a component as an argument.
- Returns a new component that wraps the original component with additional functionality.

### **Basic Structure of an HOC**

Here is a simple structure of an HOC:

```jsx
const withEnhancement = (WrappedComponent) => {
  return (props) => {
    // You can modify props or add state here
    return <WrappedComponent {...props} />;
  };
};
```

In the above code:

- `withEnhancement` is the HOC.
- `WrappedComponent` is the component that is passed to the HOC.
- The HOC returns a new component that renders the original `WrappedComponent` with any modifications or added features.

---

## **Example Implementation of HOC in React**

Let's break down the code you provided to understand how HOCs are used in a real-world example.

### **Product Component**

First, you have a simple `Product` component that displays product details such as image, title, rating, and price.

```jsx
const Product = (props) => {
  const { image, title, rating, price } = props.product;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border">
      <img
        className="w-full h-64 object-cover rounded-lg mb-4"
        src={image}
        alt={title}
      />
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{title}</h1>
      <p className="text-sm text-gray-600 mb-2">{rating.rate} ratings</p>
      <p className="text-lg font-bold text-gray-900">Price: ${price}</p>
    </div>
  );
};
```

This `Product` component displays details about a product, which includes the product's image, title, rating, and price.

### **Creating the Higher Order Component (HOC)**

Now, you create a Higher Order Component `HOF` that adds additional functionality to the `Product` component:

```jsx
export const HOF = (Product) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="bg-yellow-400 text-white px-4 py-1 rounded-md absolute top-0 left-0">
          Best Seller
        </span>
        <Product {...props} />;
      </div>
    );
  };
};
```

Here, the `HOF` component:

1. Takes the `Product` component as an argument.
2. Returns a new component that renders the `Product` component with an additional label (`Best Seller`) on top of the product's image.

The `HOF` component is essentially enhancing the `Product` component by adding a "Best Seller" badge on top of it.

### **Using the HOC in a Component**

In the `ProductCard` component, you use the `HOF` to apply the additional functionality to certain products:

```jsx
export const ProductCard = () => {
  const {
    listOfProduct,
    filterProduct,
    searchText,
    setSearchText,
    setFilterProduct,
  } = useGetProducts();

  const HOFComponent = HOF(Product); // HOF(Product) returns a function that returns a component

  return listOfProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Product Cards
      </h2>

      <div className="mb-6 flex flex-col items-center md:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Search for a product"
          />
          <button
            onClick={() => {
              const filteredData = listOfProduct.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterProduct(filteredData);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredProduct = listOfProduct.filter(
              (product) => product.rating.rate >= 4
            );
            setFilterProduct(filteredProduct);
          }}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Top Rated Products
        </button>
      </div>

      <h5 className="text-xl font-medium text-gray-700 mb-4">All Products</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterProduct.map((product, idx) => {
          return (
            <Link to={`/product/${product.id}`} key={idx} className="group">
              {product.rating.rate >= 4 ? ( // if rating is greater than or equal to 4, then render HOFComponent
                // HOFComponent is a function that returns a component
                <HOFComponent product={product} />
              ) : (
                <Product product={product} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
```

### **How the HOC Enhances Functionality**

- In the above `ProductCard` component, you check if the product has a rating of 4 or more. If the product meets the criteria, you use the `HOF` (enhanced) component to display the product with the "Best Seller" badge.
- Otherwise, you render the `Product` component without the enhancement.

### **Key Benefits of Using HOCs**

- **Reusability:** The same logic to add a "Best Seller" badge can be applied to any other component by simply wrapping it with the `HOF`.
- **Composability:** HOCs can be combined. For example, you could have a `withDiscount` HOC that adds a discount label and compose it with the `HOF` to have both the "Best Seller" and discount labels.
- **Separation of Concerns:** The UI of the `Product` component remains unchanged, and all the logic to add additional functionality is encapsulated inside the HOC.

---

## **Conclusion**

Higher Order Components (HOCs) provide an elegant solution to enhance and reuse component logic in React applications. They help in applying common functionality across different components without modifying the original components. This pattern is a powerful tool to improve the maintainability and scalability of your React projects.

---

## **Key Takeaways**

- An HOC is a function that takes a component and returns a new component with additional functionality.
- HOCs are useful for reusing logic, separating concerns, and keeping components DRY (Don't Repeat Yourself).
- HOCs can be composed, allowing you to combine multiple enhancements to a single component.
- The example demonstrated how to add a "Best Seller" badge to a product component using an HOC.

---

**Note:** HOCs don't modify the original component but rather enhance it. This allows for flexibility and extensibility without changing the underlying component structure.
