import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { useFormContext } from "@/contexts/FormContext";

export default function MainLayout() {
  const { setData } = useFormContext();
  useEffect(() => {
    if (localStorage.length > 0) {
          setData((prev) => ({
          ...prev,
          verificationStatus: true,
          email: localStorage.getItem("email"),
          token: localStorage.getItem("token"),
          newUser: false
        }));
    }
  }, [])
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
