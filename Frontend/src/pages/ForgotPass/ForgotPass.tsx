import { Skeleton } from "@/components/ui/skeleton";
import config from "@/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ForgotPass = () => {
  const [error, setError] = useState("");
  const [enteredEmail, setEnteredEmail] = useState(false);
  const [codeMatched, setCodeMatched] = useState(false);
  const [codeError, setCodeError] = useState("");
  const [passError, setPassError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPass, setConformPass] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const navigate = useNavigate();


  function emailInput(e: any) {
    setError("");
    if (e.key === "Enter") {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        setError("Please enter a valid email address!");
        return;
      }
      setIsLoading(true);
      fetch(
        `http${
          REMOTE ? "s" : ""
        }://${API_BASE_URL}:${API_PORT}/checkUser?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message == "User Email exists") {
            fetch(
              `http${
                REMOTE ? "s" : ""
              }://${API_BASE_URL}:${API_PORT}/email-verification-code`,
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ email, fp: "yes" }),
              }
            ).then((res) => {
              if (res.status == 200) setEnteredEmail(true);
              else {
                toast("an error occurred!", {
                  action: {
                    label: "Close",
                    onClick: () => void 0,
                  },
                });
              }
              setIsLoading(false);
            });
          } else {
            setIsLoading(false);
            toast("No account found with the email!", {
              action: {
                label: "Close",
                onClick: () => void 0,
              },
            });
          }
        });
    }
  }
  function emailSubmit() {
    setError("");
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }
    setIsLoading(true);
    fetch(
      `http${
        REMOTE ? "s" : ""
      }://${API_BASE_URL}:${API_PORT}/checkUser?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
          if (data.message == "User Email exists") {
            fetch(
              `http${
                REMOTE ? "s" : ""
              }://${API_BASE_URL}:${API_PORT}/email-verification-code`,
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ email, fp: "yes" }),
              }
            ).then((res) => {
              if (res.status == 200) setEnteredEmail(true);
              else {
                toast("an error occurred!", {
                  action: {
                    label: "Close",
                    onClick: () => void 0,
                  },
                });
              }
              setIsLoading(false);
            });
          } else {
            setIsLoading(false);
            toast("No account found with the email!", {
              action: {
                label: "Close",
                onClick: () => void 0,
              },
            });
          }
      });
  }
  function codeInput(e: any) {
    setCodeError("");
    if (e.key === "Enter") {
      if (!(Number(code) >= 100000 && Number(code) <= 999999)) {
        setCodeError("Code didn't match!");
        return;
      }
      setIsLoading(true);
      fetch(
        `http${
          REMOTE ? "s" : ""
        }://${API_BASE_URL}:${API_PORT}/match-verification-code`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, code }),
        }
      ).then((res) => {
        if (res.status == 201) {
            setCodeMatched(true);
        }
        else setCodeError("Code didn't match!");
        setIsLoading(false);
      });
    }
  }
  function codeSubmit() {
    setCodeError("");
    if (!(Number(code) >= 100000 && Number(code) <= 999999)) {
      setCodeError("Code didn't match!");
      return;
    }
    setIsLoading(true);
    fetch(
      `http${
        REMOTE ? "s" : ""
      }://${API_BASE_URL}:${API_PORT}/match-verification-code`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      }
    ).then((res) => {
      if (res.status == 201) {
        setCodeMatched(true);
      }
      else setCodeError("Code didn't match!");
      setIsLoading(false);
    });
  }
  function handleSubmit () {
    setPassError("");
    if (password == conformPass) {
        fetch(`http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/reset_pass?email=${email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ password }),
        }).then(res => {
            if (res.status == 200) {
                toast("Password reset successful!", {
              action: {
                label: "Close",
                onClick: () => void 0,
              },
            });
            navigate("/login");
            }
        });
    }
    else {
        setPassError("Password didn't match");
    }
  }
  return (
    <div className="mt-20 mx-auto mb-10 w-9/10 sm:w-1/3">
      {isLoading ? (
        <div className="mt-5">
          <Skeleton className="h-[125px] rounded-xl" />
          <Skeleton className="h-4 mt-3" />
        </div>
      ) : (
        <>
          {!enteredEmail ? (
            <section>
              <p className="my-5">
                <b className="text-lg">Enter your email address</b>
              </p>
              <input
                type="email"
                className="bg-[#D9D9D9] p-1 shadow-[0_3px_#8c8c8c] w-full"
                onKeyDown={emailInput}
                onChange={(e) => setEmail(e.target.value.trim())}
                placeholder="Email"
              />
              {error != "" && (
                <p className="text-left text-red-600 text-xs m-0">
                  {error}
                </p>
              )}
              <br />
              <button
                className="cursor-pointer mt-4 text-left bg-[#B46E28] p-1 px-2  w-full"
                onClick={emailSubmit}
              >
                Submit
              </button>
            </section>
          ) : (
            <>{codeMatched ? <section>
                <p className="mb-2"><b>Enter Password</b></p>
                <input
                type="password"
                className="bg-[#D9D9D9] p-1 shadow-[0_3px_#8c8c8c] w-full"
                onChange={(e) => setPassword(e.target.value.trim())}
              />
                <p className="my-2"><b>Confirm Password</b></p>
            <input
                type="password"
                className="bg-[#D9D9D9] p-1 shadow-[0_3px_#8c8c8c] w-full"
                onChange={(e) => setConformPass(e.target.value.trim())}
              />
              {passError != "" && (
                <p className="text-left text-red-600 text-xs m-0">
                  {passError}
                </p>
              )}
              <button type="submit" className="cursor-pointer mt-4 text-left bg-[#B46E28] p-1 px-2 w-full" onClick={handleSubmit}>Submit</button>
            </section> : 
             <section>
              <p className="my-5">
                We have sent a password reset code to (<b>{email}</b>). <br />
                Check your spam/junk folder too.
              </p>
              <input
                type="number"
                className="bg-[#D9D9D9] p-1 shadow-[0_3px_#8c8c8c] w-full"
                min="100000"
                max="999999"
                onKeyDown={codeInput}
                onChange={(e) => setCode(e.target.value.trim())}
                placeholder="enter your code"
              />
              {codeError != "" && (
                <p className="text-left text-red-600 text-xs m-0">
                  {codeError}
                </p>
              )}<br />
              <button
                className="cursor-pointer mt-4 text-left bg-[#B46E28] p-1 px-2 w-full"
                onClick={codeSubmit}
              >
                Submit
              </button>
            </section>
            }</>

          )}
        </>
      )}
    </div>
  );
};

export default ForgotPass;
