import { Navigate, Outlet } from "react-router-dom";
import { useAuthCheck } from "../../hooks/useAuthCheck";

const ProtectedRoute = ({ allowedRoles }) => {
  const { token, isLoading, isError, isTokenValid, userRole, location } =
    useAuthCheck();

  if (!token) return <Navigate to="/login" replace />;

  if (isLoading) {
    return <p className="text-center text-white mt-20">Checking access...</p>;
  }

  if (isError || !isTokenValid) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
