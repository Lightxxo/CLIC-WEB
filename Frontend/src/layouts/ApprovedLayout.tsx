import config from "@/config";
import { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

const ApprovedLayout = () => {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [isApproved, setIsApproved] = useState(false);
      const { REMOTE, API_BASE_URL, API_PORT } = config;
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (localStorage.length && token && token.length > 0) {
        setIsAuthenticated(true);
        fetch(`http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/user_approved`)
        .then(res => res.json())
        .then(data => {
            if (data.approved == "approved") {
                setIsApproved(true);
            }
        })
      }
    }, []);
    if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
    }
    if (!isApproved) {
    return (<div>
        <p>Member isn't approved!</p>
        <Link to="/">Return Home</Link>
    </div>);
    }
    return <Outlet />;
};

export default ApprovedLayout;