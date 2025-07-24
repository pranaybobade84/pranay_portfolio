import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import SkillsSection from "../pages/Skills";
import ProjectSection from "../pages/Projects";
import BlogMainPage from "../pages/Blog";
import Login from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import Unauthorized from "../pages/UnAuthorized";
import AdminLayout from "../layout/AdminLayOut";
import ProtectedRoute from "../pages/ProtectedRoute";
import NotFound from "../pages/NotFound";
import Loadable from "../utils/Lodable";

const ExperienceDetails = lazy(() =>
  import("../pages/Experience/ExperienceDetail")
);
const BlogDetailPage = lazy(() => import("../pages/BlogDetail"));
const ManageAbout = lazy(() => import("../Admin/ManageAbout"));
const ManageBlogs = lazy(() => import("../Admin/ManageBlogs"));
const ManageExperience = lazy(() => import("../Admin/ManageExperience"));
const ManageSkills = lazy(() => import("../Admin/ManageSkills"));
const ManageProjects = lazy(() => import("../Admin/ManageProjects"));
const AdminDashboard = lazy(() => import("../Admin/AdminDashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "experience", element: <Experience /> },
      {
        path: "experience/:id",
        element: Loadable(ExperienceDetails, "Loading experience details..."),
      },
      { path: "skills", element: <SkillsSection /> },
      { path: "projects", element: <ProjectSection /> },
      { path: "blog", element: <BlogMainPage /> },
      {
        path: "blog/:slug",
        element: Loadable(BlogDetailPage, "Loading blog post..."),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <RegisterPage /> },
      { path: "unauthorized", element: <Unauthorized /> },

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
                element: Loadable(AdminDashboard, "Loading Dashboard..."),
              },
              {
                path: "blogs",
                element: Loadable(ManageBlogs, "Loading blogs manager..."),
              },
              {
                path: "skills",
                element: Loadable(ManageSkills, "Loading skills manager..."),
              },
              {
                path: "experience",
                element: Loadable(
                  ManageExperience,
                  "Loading experience manager..."
                ),
              },
              {
                path: "project",
                element: Loadable(ManageProjects, "Loading project manager..."),
              },
              {
                path: "about",
                element: Loadable(ManageAbout, "Loading about manager..."),
              },
            ],
          },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
