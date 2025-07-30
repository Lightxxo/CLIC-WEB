import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { useFormContext } from "@/contexts/FormContext";

export default function MainLayout() {
  const { setData } = useFormContext();
  useEffect(() => {
    
    const token = localStorage.getItem("token");
    if (localStorage.length && token && token.length > 0) {
      setData((prev) => ({
        ...prev,
        verificationStatus: true,
        email: localStorage.getItem("email"),
        token: token,
        newUser: false,
      }));
    }
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
