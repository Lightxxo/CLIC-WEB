import { Input } from "@/components/ui/input"
import { useState } from "react";

const Signup = () => {
    const [error, setError] = useState("");
    const [enteredEmail, setEnteredEmail] = useState(false);
    function emailInput(e: any) {
        setError("");
        if (e.key === "Enter") {
            const input = e.target as HTMLInputElement;
            if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
                setError("Please enter a valid email address!"); return;
            }
            // fetch("http://localhost:5000/checkUser?email=" + input.value)
            // .then(res => {
            //     console.log(res.status);
            // });
            setEnteredEmail(true);
        }
    }
    return (
        <div className="mt-20 text-center">
            <p className="text-xl">talk to people at online events <br /> the events pool the people we know you will clic with</p>
            {!enteredEmail ?
                <section>
                    <p className="my-5">Enter your email address to apply for membership</p>
                    <Input type="email" className="w-1/2 m-auto p-5" onKeyDown={emailInput} placeholder="Email" />
                    {error != "" && <p className="text-left w-1/2 m-auto text-red-600 text-xs">{error}</p>}
                </section>
                :
                <section>
                    <p className="my-5">We have sent you a verification code. Check your email (also spam).</p>
                </section>}
        </div>
    );
};

export default Signup;