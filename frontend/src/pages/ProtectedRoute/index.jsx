import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token =true
  return token ? <Outlet /> : <Navigate to="/admin" />;
};

export default ProtectedRoute;
