import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { Kids } from "./pages/Kids";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Cart } from "./pages/Cart";
import { Error } from "./pages/Error";
import Footer from "./components/Footer";
import { ProductCard } from "./components/ProductCard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ProductsDetails } from "./pages/ProductsDetails";
// import Grocery from "./components/Grocery";

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
