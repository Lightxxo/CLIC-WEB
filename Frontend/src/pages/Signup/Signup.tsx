import EmailVerification from "@/components/EmailVerification/EmailVerification";
import MultiPartForm from "@/components/MultiPartForm/MultiPartForm";
import SignupSuccess from "@/components/SignupSuccess/SignupSuccess";
import { useFormContext } from "@/contexts/FormContext";
import { AnimatePresence, motion } from "framer-motion";

const fadeVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" as const },
  },
};

const quiz = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome", "London"],
  },
  {
    id: 2,
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript", "Ruby"],
  },
  {
    id: 3,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Jane Austen",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
    ],
  },
  {
    id: 4,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3", "5"],
  },
  {
    id: 5,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter", "Saturn"],
  },
];

const Signup = () => {
  const { data } = useFormContext();

  const getCurrentComponent = () => {
    if (data.signupSuccess) {
      return {
        key: "signup-success",
        component: (
          <>
            <SignupSuccess></SignupSuccess>
          </>
        ),
      };
    }

    // if (!data.verificationStatus) {
    //   return {
    //     key: "email-verification",
    //     component: (
    //       <>
    //         <EmailVerification></EmailVerification>
    //       </>
    //     ),
    //   };
    // }

    if (data.newUser) {
      return {
        key: "multi-form",
        component: (
          <>
            {/* Multi-Step Quiz Form for New Users */}
            <p className="text-center text-xs  mt-8">New Member Onboarding</p>
            <MultiPartForm questions={quiz} />
          </>
        ),
      };
    }

    return {
      key: "existing-user",
      component: (
        <>
          {/* Existing User Screen */}
          <p className="text-center text-sm text-muted-foreground mb-4">
            Welcome Back
          </p>
          {/* <ExistingUserComponent /> */}
        </>
      ),
    };
  };

  const { key, component } = getCurrentComponent();

  return (
    <div className="relative min-h-screen w-full flex  justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          variants={fadeVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Signup;
