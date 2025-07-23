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
import Login from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import ProjectSection from "../pages/Projects";
import Unauthorized from "../pages/UnAuthorized";
import ManageSkills from "../Admin/ManageSkills";
import ManageExperience from "../Admin/ManageExperience";
import ManageProjects from "../Admin/ManageProjects";
import ManageAbout from "../Admin/ManageAbout";
import NotFound from "../pages/NotFound";
import ExperienceDetails from "../pages/Experience/ExperienceDetail";

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
        path: "experience/:id",
        element: <ExperienceDetails />,
      },
      {
        path: "skills",
        element: <SkillsSection />,
      },
      {
        path: "projects",
        element: <ProjectSection />,
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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "unauthorized",
        element: <Unauthorized />,
      },
      {
        path: "admin",
        element: <ProtectedRoute allowedRoles={"admin"} />,
        children: [
          {
            path: "",
            element: <AdminLayout />,
            children: [
              {
                index: true,
                element: <AdminDashboard />,
              },
              {
                path: "blogs",
                element: <ManageBlogs />,
              },
              {
                path: "skills",
                element: <ManageSkills />,
              },
              {
                path: "experience",
                element: <ManageExperience />,
              },
              {
                path: "project",
                element: <ManageProjects />,
              },
              {
                path: "about",
                element: <ManageAbout />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
