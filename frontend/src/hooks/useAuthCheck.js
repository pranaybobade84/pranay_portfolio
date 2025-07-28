import { useLocation } from "react-router-dom";
import { useVerifyTokenQuery } from "../endpoints/auth/authEndpoint";

export const useAuthCheck = () => {
  const location = useLocation();
  const token = localStorage.getItem("accessToken");

  const { data, isLoading, isError } = useVerifyTokenQuery(undefined, {
    skip: !token,
  });

  const isTokenValid = data?.valid;
  const userRole = data?.role;

  return {
    token,
    isLoading,
    isError,
    isTokenValid,
    userRole,
    location,
  };
};
