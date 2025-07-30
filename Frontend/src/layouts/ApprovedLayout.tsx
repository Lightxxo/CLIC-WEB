import config from "@/config";
import { useFormContext } from "@/contexts/FormContext";
import PendingPage from "@/pages/PendingPage/PendingPage";
import { useEffect, useState } from "react";
import {Navigate, Outlet } from "react-router-dom";

const ApprovedLayout = () => {
      const [isApproved, setIsApproved] = useState(false);
      const [loadingState, setLoadingState] = useState(true);
      const { REMOTE, API_BASE_URL, API_PORT } = config;
      const {data} = useFormContext();
    useEffect(() => {
      if (data.token) {
        fetch(`http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/user_approved`, {
                headers: {
                    "Authorization": `Bearer ${data.token}`,
                }
            })
        .then(res => res.json())
        .then(data => {
            if (data.approved == "approved") {
                setIsApproved(true);
            }
            setLoadingState(false);
        })
      }
    }, [data.token]);
    if (data.loading) return <></>;
    if (!data.token) {
    return <Navigate to="/login" replace />;
    }
    return (<>
      {loadingState ? <></> : <>{isApproved ? <Outlet /> : <PendingPage />}</>}
    </>);
};

export default ApprovedLayout;