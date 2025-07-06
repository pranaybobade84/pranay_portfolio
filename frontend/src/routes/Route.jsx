import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h1>Entered To Town</h1>,
      },
    ],
  },
]);

export default router;
