import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { Error } from "./pages/Error";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Functional from "./components/Functional";
import ClassBased from "./components/ClassBased";
import Home from "./pages/Home";
import About from "./pages/About";

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
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/functional",
        element: (
          <Functional name="Anil" address="Mumbai" email="anil@gmail.com" />
        ),
      },
      {
        path: "/class-based",
        element: (
          <ClassBased name="Prince" address="Delhi" email="prince@gmail.com" />
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
