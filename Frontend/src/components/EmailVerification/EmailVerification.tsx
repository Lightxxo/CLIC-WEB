import { Skeleton } from "@/components/ui/skeleton";
import config from "@/config";
import { useFormContext } from "@/contexts/FormContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const EmailVerification = () => {
  const [error, setError] = useState("");
  const [enteredEmail, setEnteredEmail] = useState(false);
  const [codeError, setCodeError] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { REMOTE, API_BASE_URL, API_PORT } = config;
  const navigate = useNavigate();

  const { setData } = useFormContext();

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
            setIsLoading(false);
            toast("You already have an account!", {
              action: {
                label: "Close",
                onClick: () => void 0,
              },
            });
            navigate("/login");
          } else {
            fetch(
              `http${
                REMOTE ? "s" : ""
              }://${API_BASE_URL}:${API_PORT}/email-verification-code`,
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ email }),
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
          setIsLoading(false);
          toast("You already have an account!", {
            action: {
              label: "Close",
              onClick: () => void 0,
            },
          });
          navigate("/login");
        } else {
          fetch(
            `http${
              REMOTE ? "s" : ""
            }://${API_BASE_URL}:${API_PORT}/email-verification-code`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ email }),
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
          setData((prev) => ({
            ...prev,
            verificationStatus: true,
            email,
            newUser: true,
          }));
        }
        // else if (res.status == 200) {
        //   setData((prev) => ({
        //     ...prev,
        //     verificationStatus: true,
        //     email,
        //     newUser: false,
        //   }));
        // }
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
        setData((prev) => ({
          ...prev,
          verificationStatus: true,
          email,
          newUser: true,
        }));
      }
      //  else if (res.status == 200) {
      //   setData((prev) => ({
      //     ...prev,
      //     verificationStatus: true,
      //     email,
      //     newUser: false,
      //   }));
      // }
      else setCodeError("Code didn't match!");
      setIsLoading(false);
    });
  }
  return (
    <div className="mt-20 text-center">
      <div className="text-center my-10">
        <p className="text-base font-medium text-gray-800 max-w-sm mx-auto leading-relaxed px-2">
          Jump into pools of live online events.
        </p>
        <p className="text-base font-medium text-gray-800 max-w-sm mx-auto mt-2 leading-relaxed px-2">
          Talk to members we know you’ll Clic with.
        </p>
      </div>

      {isLoading ? (
        <div className="w-1/2 m-auto mt-5">
          <Skeleton className="h-[125px] rounded-xl" />
          <Skeleton className="h-4 mt-3" />
        </div>
      ) : (
        <>
          {!enteredEmail ? (
            <section>
              <p className="my-5">
                <b className="text-lg">Enter your email address</b> <br />{" "}
                <small className="text-gray-500">to apply for membership</small>
              </p>
              <input
                type="email"
                className="w-4/5 md:w-1/4 mx-auto bg-[#D9D9D9] p-1 shadow-[0_3px_#8c8c8c]"
                onKeyDown={emailInput}
                onChange={(e) => setEmail(e.target.value.trim())}
                placeholder="Email"
              />
              {error != "" && (
                <p className="text-left w-4/5 md:w-1/4 mx-auto text-red-600 text-xs">
                  {error}
                </p>
              )}
              <br />
              <button
                className="cursor-pointer mt-4 w-4/5 md:w-1/4 mx-auto text-left bg-[#B46E28] p-1 px-2"
                onClick={emailSubmit}
              >
                Submit
              </button>
              <p className="text-md mt-5">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </p>
            </section>
          ) : (
            <section>
              <p className="my-5">
                We have sent a verification code to (<b>{email}</b>). <br />
                Check your spam/junk folder too. If you entered an incorrect
                email address, you won't receive a code.
              </p>
              <input
                type="number"
                className="w-4/5 md:w-1/4 mx-auto bg-[#D9D9D9] p-1 shadow-[0_3px_#8c8c8c]"
                min="100000"
                max="999999"
                onKeyDown={codeInput}
                onChange={(e) => setCode(e.target.value.trim())}
                placeholder="enter your code"
              />
              {codeError != "" && (
                <p className="text-left w-4/5 md:w-1/4 mx-auto text-red-600 text-xs">
                  {codeError}
                </p>
              )}<br />
              <button
                className="cursor-pointer mt-4 w-4/5 md:w-1/4 mx-auto text-left bg-[#B46E28] p-1 px-2"
                onClick={codeSubmit}
              >
                Submit
              </button>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default EmailVerification;
