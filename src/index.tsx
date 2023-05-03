import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App videoSrc="video1" />
  },
  {
    path: "/video1",
    element: <App videoSrc="video1" />
  },
  {
    path: "/video2",
    element: <App videoSrc="video2" />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
