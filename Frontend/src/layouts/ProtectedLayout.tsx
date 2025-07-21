import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = true; // Replace with your real auth check

export default function ProtectedLayout() {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
