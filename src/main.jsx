import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Landing from "./pages/Landing/Landing.jsx";
import Artists from "./pages/Artists/Artists.jsx";
import Piercer from "./pages/Piercer/Piercer.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Location from "./pages/Location/Location.jsx";
import Admin from "./pages/Admin/Admin.jsx";

const router = createBrowserRouter([
  {
    parth: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "artists",
        element: <Artists />,
      },
      {
        path: "piercer",
        element: <Piercer />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "location",
        element: <Location />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
