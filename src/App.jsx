import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";
import Support from "./pages/Support";
import Transactions from "./pages/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
