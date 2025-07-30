import { Input } from "@/components/ui/input"
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import config from "@/config";
import { useFormContext } from "@/contexts/FormContext";

const Login = () => {
    const [emailError, setEmailError] = useState("");
    // const [passError, setPassError] = useState("");
    const { REMOTE, API_BASE_URL, API_PORT } = config;
    const { setData } = useFormContext();
    const navigate = useNavigate();
    function handleSubmit(e: { preventDefault: () => void; target: any; }) {
        e.preventDefault();
        setEmailError(""); // setPassError("");
        const form = e.target;
        const email = form.email.value;
        const password = form.pass.value;
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError("Please enter a valid email address!"); return;
        }
        // if (password.length < 6) {
        //     setPassError("Password have to be at least 6 characters long!"); return;
        // }
        fetch(`http${
          REMOTE ? "s" : ""
        }://${API_BASE_URL}:${API_PORT}/login`, {
            method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }).then(res => res.json())
        .then(data => {
            if (data.message == "Login successful") {
                localStorage.setItem("email", email);
                localStorage.setItem("token", data.token);
                setData((prev) => ({
          ...prev,
          verificationStatus: true,
          newUser: false,
          email: email,
          token: data.token,
        })); alert("login successful!"); navigate("/signup");
        } else if (data.message == "Incorrect password") {alert("Incorrect password");}
        else {alert("User does not exist");}
        })
    }
    return (
        <div className="text-center w-4/5 md:w-1/3 mx-auto">
            <h3 className='font-bold text-xl mb-8 mt-4'>Login</h3>
            <form onSubmit={handleSubmit}>
                <Input type="email" placeholder="Email" name='email' required />
                {emailError != "" && (
                <p className="text-left w-1/2 m-auto text-red-600 text-xs">
                  {emailError}
                </p>
              )}
              <br />
                <Input type="password" placeholder="Password" name='pass' required />
                {/* {passError != "" && (
                <p className="text-left w-1/2 m-auto text-red-600 text-xs">
                  {passError}
                </p>
              )} */}
                <Button type='submit'
                variant="outline"
                className="cursor-pointer mt-4">
                Submit
              </Button>
            </form>
            <p className="text-xs mt-5">Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
        </div>
    );
};

export default Login;