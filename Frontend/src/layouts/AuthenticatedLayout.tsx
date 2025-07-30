import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthenticatedLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (localStorage.length && token && token.length > 0) {
        setIsAuthenticated(true);
      }
    }, []);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
