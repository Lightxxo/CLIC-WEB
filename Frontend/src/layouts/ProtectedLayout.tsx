import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedLayoutProps {
  element: React.ReactElement;
}

const isAuthenticated = true; // Replace with your real auth check

export default function ProtectedLayout({ element }: ProtectedLayoutProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return element;
}
