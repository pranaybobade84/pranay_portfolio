import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useVerifyTokenQuery } from "../../endpoints/auth/authEndpoint";

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const token = localStorage.getItem("accessToken");

  const { data, isLoading, isError } = useVerifyTokenQuery(undefined, {
    skip: !token,
  });

  if (!token) return <Navigate to="/login" replace />;

  if (isLoading) {
    return <p className="text-center text-white mt-20">Checking access...</p>;
  }

  if (isError || !data?.valid) {
    return <Navigate to="/login" replace />;
  }

  const userRole = data?.role;

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
