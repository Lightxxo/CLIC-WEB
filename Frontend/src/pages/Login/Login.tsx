"use client";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import config from "@/config";
import { useFormContext } from "@/contexts/FormContext";
import { toast } from "sonner";

const Login = () => {
  const [emailError, setEmailError] = useState("");
  // const [passError, setPassError] = useState("");
  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const { setData } = useFormContext();
  const navigate = useNavigate();
  function handleSubmit(e: { preventDefault: () => void; target: any }) {
    e.preventDefault();
    setEmailError(""); // setPassError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    }
    // if (password.length < 6) {
    //     setPassError("Password have to be at least 6 characters long!"); return;
    // }
    fetch(`http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Login successful") {
          localStorage.setItem("email", email);
          localStorage.setItem("userName", data.isExists.userName);
          localStorage.setItem("imgURL", data.isExists.imgURL);
          localStorage.setItem("token", data.token);
          setData((prev) => ({
            ...prev,
            verificationStatus: true,
            newUser: false,
            email: email,
            token: data.token,
          }));
          fetch(
            `http${
              REMOTE ? "s" : ""
            }://${API_BASE_URL}:${API_PORT}/user_approved`,
            {
              headers: {
                Authorization: `Bearer ${data.token}`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.approved == "approved") {
                localStorage.setItem("isApproved", "true");

                navigate("/pools");
              } else {
                navigate("/");
              }
              toast("login successful!", {
                action: {
                  label: "Close",
                  onClick: () => void 0,
                },
              });
            });
        } else if (data.message == "Incorrect password") {
          toast("Incorrect password", {
            action: {
              label: "Close",
              onClick: () => void 0,
            },
          });
        } else {
          toast("User does not exist", {
            action: {
              label: "Close",
              onClick: () => void 0,
            },
          });
        }
      });
  }
  return (
    <div className="w-4/5 md:w-1/3 mx-auto">
      <h3 className="font-bold text-xl mt-20">Login</h3>
      <p className="text-lg mb-3">Welcome back if you’re already a member of the Club. Please login here.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" className="w-full bg-[#D9D9D9] mb-3 p-1 shadow-[0_3px_#8c8c8c]" required />
        {emailError != "" && (
          <p className="text-left w-1/2 m-auto text-red-600 text-xs">
            {emailError}
          </p>
        )}
        <br />
        <input type="password" placeholder="Password" name="pass" className="w-full bg-[#D9D9D9] mb-3 p-1 shadow-[0_3px_#8c8c8c]" required />
        {/* {passError != "" && (
                <p className="text-left w-1/2 m-auto text-red-600 text-xs">
                  {passError}
                </p>
              )} */}
        <button type="submit" className="cursor-pointer w-full text-left bg-[#B46E28] p-1 px-2">
          Login
        </button>
      </form>
      <p className="text-md my-5">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-600">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
