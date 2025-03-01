import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Memo from "./pages/Memo";
import Ref from "./pages/Ref";

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
        path: "/memo",
        element: <Memo />,
      },
      {
        path: "/ref",
        element: <Ref />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
