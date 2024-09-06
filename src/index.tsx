import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Slounik from "./features/Slounik";
import Pravily from "./features/Pravily";
import { Provider } from "react-redux";
import store from "./state/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "bel-balb", element: <Slounik /> },
      { path: "balb-bel", element: <Slounik /> },
      { path: "pravily", element: <Pravily /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
