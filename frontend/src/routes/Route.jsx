import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import SkillsSection from "../pages/Skills";
import BlogMainPage from "../pages/Blog";
import BlogDetailPage from "../pages/BlogDetail";
import AdminLayout from "../layout/AdminLayOut";
import ProtectedRoute from "../pages/ProtectedRoute";
import AdminDashboard from "../Admin/AdminDashboard";
import ManageBlogs from "../Admin/ManageBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "skills",
        element: <SkillsSection />,
      },
      {
        path: "blog",
        element: <BlogMainPage />,
      },
      {
        path: "blog/:slug",
        element: <BlogDetailPage />,
      },
      {
        path: "admin",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <AdminLayout />,
            children:[
              {
                index:true,
                element:<AdminDashboard/>
              },
              {
                path:'blogs',
                element:<ManageBlogs/>
              }
            ]
          },
        ],
      },
    ],
  },
]);

export default router;
