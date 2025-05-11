import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home'
import Login from './Components/login'
import Signup from './Components/Signup'
import Account from "./Components/Account";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/account",
      element: <Account/>,
    },
  ]);

  return (
    <div className="box-border p-0 m-0 ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
