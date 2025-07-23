// import { Input } from "@/components/ui/input"
// import { useEffect, useState } from "react";

// const Signup = () => {
//     const [error, setError] = useState("");
//     const [enteredEmail, setEnteredEmail] = useState(false);
//     const [codeError, setCodeError] = useState("");
//     const [email, setEmail] = useState("");
//     const [isVerified, setIsVerified] = useState(false);
//     const [newUser, setNewUser] = useState(true);

//     // useEffect(() => {
//     //     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => console.log(response.status))
//     // }, [])

//     function emailInput(e: any) {
//         setError("");
//         if (e.key === "Enter") {
//             const input = e.target as HTMLInputElement;
//             if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value.trim()))) {
//                 setError("Please enter a valid email address!"); return;
//             }
//             setEmail(input.value.trim());
//             fetch("http://localhost:5000/email-verification-code", {
//                 method: 'POST',
//                 headers: {
//                     'content-type':'application/json',
//                 },
//                 body: JSON.stringify({email: input.value.trim()})
//             })
//             .then(res => {
//                 if (res.status == 200) setEnteredEmail(true);
//                 else alert("an error occurred!");
//             });
//         }
//     }
//         function codeInput(e: any) {
//         setCodeError("");
//         if (e.key === "Enter") {
//             const input = e.target as HTMLInputElement;
//             if (!(Number(input.value.trim()) >= 100000 && Number(input.value.trim()) <= 999999)) {
//                 setCodeError("Code didn't match!"); return;
//             }
//             fetch("http://localhost:5000/match-verification-code", {
//                 method: 'POST',
//                 headers: {
//                     'content-type':'application/json',
//                 },
//                 body: JSON.stringify({email, code: input.value.trim()})
//             }).then(res => {
//                 if (res.status == 201) setIsVerified(true);
//                 else if (res.status == 200) {setIsVerified(true); setNewUser(false);}
//                 else setCodeError("Code didn't match!");
//             })
//         }
//     }
//     return (
//         <div className="mt-20 text-center">
//             <p className="text-xl">talk to people at online events <br /> the events pool the people we know you will clic with</p>
//             {isVerified ? <>{newUser ?
//                 <p>Please continue to Signup.</p>
//             : <p>Welcome!</p>}</>
//             :
//             <>{!enteredEmail ?
//                 <section>
//                     <p className="my-5">Enter your email address to apply for membership</p>
//                     <Input type="email" className="w-1/2 m-auto p-5" onKeyDown={emailInput} placeholder="Email" />
//                     {error != "" && <p className="text-left w-1/2 m-auto text-red-600 text-xs">{error}</p>}
//                 </section>
//                 :
//                 <section>
//                     <p className="my-5">We have sent you a verification code to your email (<b>{email}</b>). <br />
//                       Check your email (also spam).</p>
//                     <Input type="number" className="w-1/2 m-auto p-5" min="100000" max="999999" onKeyDown={codeInput} placeholder="enter your code" />
//                     {codeError != "" && <p className="text-left w-1/2 m-auto text-red-600 text-xs">{codeError}</p>}
//                 </section>}</>}

//         </div>
//     );
// };

// export default Signup;

import MultiPartForm from "@/components/MultiPartForm/MultiPartForm";

const sampleQuestions = [
  {
    question: "What is your favorite programming language?",
    options: ["JavaScript", "Python", "C++", "Go"],
  },
    {
    question: "What asdasd",
    options: ["JavaSasdasdcript", "Pythasdasdon", "C+asdasd+", "Goasdasd"],
  },
];

export default function Signup() {
  return (
    <div className="p-4">
      <MultiPartForm questions={sampleQuestions} />
    </div>
  );
}
