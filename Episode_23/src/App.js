import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/FormHandling/Login";
import Signup from "./pages/FormHandling/Signup";
import JobApplicationForm from "./pages/FormValidation/JobApplicationForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <h1 className="text-center font-semibold text-3xl p-4 border-b border-black">
          Form Handling & Validation with ZOD in React
        </h1>
        <Outlet />
      </div>
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/form-validation",
        element: <JobApplicationForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
