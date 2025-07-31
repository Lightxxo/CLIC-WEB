"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/CLICCLUB.Logo_Blue.svg";
import { useFormContext } from "@/contexts/FormContext";
import { useNavigate } from "react-router-dom";

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
      <nav className="relative z-50 w-full border-b border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-figma-blue">
          <img src={logo} width="50" />
        </a>

        {/* Desktop nav buttons */}
        <div className="hidden space-x-4 md:flex">
          {data.token ? (
            <Button variant="ghost" asChild>
              <a href="/pools">Pools</a>
            </Button>
          ) : (
            <></>
          )}
          <Button variant="ghost" asChild>
            <a href="/howitworks">How it works</a>
          </Button>
          {data.token ? (
            <Button variant="ghost" className="cursor-pointer" onClick={logOut}>
              Logout
            </Button>
          ) : (
            <Button variant="ghost" asChild>
              <a href="/signup">Sign up</a>
            </Button>
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
              {data.token ? (
                <Button
                  variant="ghost"
                  className="cursor-pointer"
                  onClick={logOut}
                >
                  Logout
                </Button>
              ) : (
                <Button variant="ghost" asChild>
                  <a href="/signup">Sign up</a>
                </Button>
              )}
              <Button variant="ghost" asChild>
                <a href="/howitworks">How it works</a>
              </Button>
              {data.token ? (
                <Button variant="ghost" asChild>
                  <a href="/pools">Pools</a>
                </Button>
              ) : (
                <></>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
