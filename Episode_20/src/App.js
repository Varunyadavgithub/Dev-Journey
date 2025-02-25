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
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/functional",
        element: <Functional />,
      },
      {
        path: "/class-based",
        element: <ClassBased />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
