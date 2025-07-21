import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Landing from "./pages/Landing/Landing";
import Signup from "./pages/Signup/Signup";
// Pages
// import Login from "./routes/Login";


// // Lazy public route (future use)
// const About = lazy(() => import("./routes/About"));

// // Eager private route (future use)
// import Profile from "./routes/Profile";

// // Lazy private route (future use)
// const Dashboard = lazy(() => import("./routes/Dashboard"));



export default function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />

      {/*
      <Route path="/login" element={<Login />} />
      <Route
        path="/about"
        element={
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
        }
      />
      */}

      {/* Protected routes */}
      {/*
      <Route
        path="dashboard"
        element={
          <ProtectedLayout
            element={
              <Suspense fallback={<div>Loading Dashboard...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
        }
      />
      */}

      {/*
      <Route
        path="profile"
        element={
          <ProtectedLayout element={<Profile />} />
        }
      />
      */}
    </Routes>
  );
}
