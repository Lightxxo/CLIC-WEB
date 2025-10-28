import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { useFormContext } from "@/contexts/FormContext";
import config from "@/config";
import Footer from "@/components/Footer/Footer";
import NotificationBanner from "@/components/Navbar/NotificationBanner";
import { useInvite } from "@/contexts/InviteContext";

const { REMOTE, API_BASE_URL, API_PORT } = config;
export default function MainLayout() {
  const { setData } = useFormContext();
  const {invitationCount} = useInvite();
  const location = useLocation();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (localStorage.length && token && token.length > 0) {
      setData((prev) => ({
        ...prev,
        verificationStatus: true,
        email: localStorage.getItem("email"),
        token: token,
        newUser: false,
      }));
      fetch(
        `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/user_approved`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.approved == "approved") {
            localStorage.setItem("isApproved", "true");
          }
        });
    }

    setData((prev) => ({
      ...prev,
      loading: false,
    }));
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-transparent">
        {token && (location.pathname != "/myinvites") && (invitationCount > 0) && <NotificationBanner />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
