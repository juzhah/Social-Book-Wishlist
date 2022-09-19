import React from "react";
import { UserProvider } from "./context/UserContext";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";
import CreatePost from "./components/CreatePost";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage";
import LogIn from "./components/LogIn";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <LogIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/createpost",
        element: <CreatePost />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
