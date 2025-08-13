"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/CLICCLUB.Logo_Blue.svg";
import { useFormContext } from "@/contexts/FormContext";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data, setData } = useFormContext();
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    setData((prev) => ({
      ...prev,
      verificationStatus: false,
      email: "",
      token: null,
    }));
    navigate("/");
  };

  return (
    <>
      <nav className="relative z-50 w-full nav-bg-color px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-figma-blue">
          <img src={logo} width="65" />
        </Link>

        {/* Desktop nav buttons */}
        <div className="hidden space-x-4 md:flex">
      
            <Button variant="ghost">
              <Link to="/howitworks" className="text-lg gill-sans-bold pb-1">How it works</Link>
            </Button>

          {data.token && localStorage.getItem("isApproved") ? (
            <Button variant="ghost">
              <Link to="/pools" className="text-lg gill-sans-bold pb-1">Pools</Link>
            </Button>
          ) : (
            <></>
          )}

          {data.token ? (
            <Button variant="ghost" className="cursor-pointer text-lg gill-sans-bold pt-1" onClick={logOut}>
              Log out
            </Button>
          ) : (
            <>
              <Button variant="ghost">
                <Link to="/signup" className="text-lg gill-sans-bold pb-1">Sign up</Link>
              </Button>
              <Button variant="ghost">
                <Link to="/login" className="text-lg gill-sans-bold pb-1">Login</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sliding Drawer */}
            <motion.div
              className="fixed right-0 top-0 z-50 h-full bg-white px-6 py-4 shadow-lg flex flex-col space-y-4 md:hidden max-w-[80vw] w-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
            
                <Button variant="ghost">
                  <Link to="/howitworks" className="text-lg gill-sans-bold pb-1">How it works</Link>
                </Button>

              {data.token && localStorage.getItem("isApproved") ? (
                <Button variant="ghost">
                  <Link to="/pools" className="text-lg gill-sans-bold pb-1">Pools</Link>
                </Button>
              ) : (
                <></>
              )}
              {data.token ? (
                <Button
                  variant="ghost"
                  className="cursor-pointer text-lg gill-sans-bold"
                  onClick={logOut}
                >
                  Log out
                </Button>
              ) : (
                <>
                  <Button variant="ghost">
                    <Link to="/signup" className="text-lg gill-sans-bold pb-1">Sign up</Link>
                  </Button>
                  <Button variant="ghost">
                    <Link to="/login" className="text-lg gill-sans-bold pb-1">Login</Link>
                  </Button>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
