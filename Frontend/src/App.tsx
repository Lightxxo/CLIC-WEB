// import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";

// // Lazy public route (future use)
// const About = lazy(() => import("./routes/About"));

// // Eager private route (future use)
// import Profile from "./routes/Profile";

// // Lazy private route (future use)
// const Dashboard = lazy(() => import("./routes/Dashboard"));

import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import MainLayout from "./layouts/MainLayout";
import Signup from "./pages/Signup/Signup";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import ApprovedLayout from "./layouts/ApprovedLayout";
import Pools from "./pages/Pools/Pools";
import PoolDetails from "./pages/PoolDetails/PoolDetails";
import Login from "./pages/Login/Login";
import Authenticated from "./pages/Protected/Authenticated";
import Approved from "./pages/Protected/Approved";

export default function App() {
  return (
    <Routes>
      {/* Public routes WITHOUT navbar */}

      {/* Routes WITH navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Public routes with navbar */}
        {/*
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading About...</div>}>
              <About />
            </Suspense>
          }
        />
        */}

        {/* Authenticated routes WITH navbar */}
        <Route element={<AuthenticatedLayout />}>
          <Route path="authenticated" element={<Authenticated />} />
          <Route path="/howitworks" element={<HowItWorks></HowItWorks>} />
          {/*
          <Route path="profile" element={<Profile />} />

          <Route
            path="dashboard"
            element={
              <Suspense fallback={<div>Loading Dashboard...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          */}
        </Route>

        {/* Approved routes WITH navbar */}
        <Route element={<ApprovedLayout />}>
          <Route path="approved" element={<Approved />} />
          <Route path="/pools" element={<Pools />} />
          <Route path="/pools/:id" element={<PoolDetails />} />
          {/*
          <Route path="profile" element={<Profile />} />

          <Route
            path="dashboard"
            element={
              <Suspense fallback={<div>Loading Dashboard...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          */}
        </Route>
      </Route>

      {/* 
      // Protected routes WITHOUT navbar (optional)
      // For routes that should NOT have navbar, define here using
      // a separate layout or just render directly inside ProtectedLayout

      // <Route element={<ProtectedLayout />}>
      //   <Route
      //     path="secret"
      //     element={
      //       <Suspense fallback={<div>Loading Secret...</div>}>
      //         <SecretPage />
      //       </Suspense>
      //     }
      //   />
      // </Route>
      */}
    </Routes>
  );
}
