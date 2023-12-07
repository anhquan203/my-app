import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Categories from "../Sesion07/Categories";
import Customers from "../Sesion07/Customers";
import Employees from "../Sesion07/Employees";
import Products from "../Sesion07/Product";
import Suppliers from "../Sesion07/Suppliers";
import Orders from "../Sesion07/Orders";
import Root from "./Root";
import Login from "./Login";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/suppliers",
        element: <Suppliers />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <main style={{ padding: "1rem" }}>
        <p>404 Page not found</p>
      </main>
    ),
  },
]);

type Props = {};

export default function Page({}: Props) {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </div>
  );
}
