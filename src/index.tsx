import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/video1",
    element: <App videoSrc="video1" />
  },
  {
    path: "/video2",
    element: <App videoSrc="video2" />
  },
  {
    path: "/video3",
    element: <App videoSrc="video3" />
  },
  {
    path: "/video4",
    element: <App videoSrc="video4" />
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
