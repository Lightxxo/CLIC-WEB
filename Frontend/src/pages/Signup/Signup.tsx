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
    question: "Spirituality:",
    options: [
      "I only believe in what material science can prove",
      "I believe in organised religion and practice regularly.",
      "I am open to religion but don't practice regularly /actively ",
      "I am open to spirituality; and would like to understand more about the realm beyond what we see",
      "I interact with the spiritual world",
    ],
  },
  {
    id: 2,
    question: "How would you describe your taste in music?",
    options: [
      "Country / Pop",
      "Classical / Jazz",
      "Techno / Electronic dance music",
      "Heavy Metal / Avant garde / Experimental",
      "I don’t care / whatever is playing is fine",
    ],
  },
  {
    id: 3,
    question: "I see myself as someone who is reserved.",
  },
    {
    id: 4,
    question: "I see myself as someone who is generally trusting.",
  },
  {
    id: 5,
    question: "I see myself as someone who tends to be lazy.",
  },
    {
    id: 6,
    question: "I see myself as someone who is relaxed, handles stress well.",
  },
  {
    id: 7,
    question: "I see myself as someone who has few artistic interests.",
  },
    {
    id: 8,
    question: "I see myself as someone who is outgoing, sociable.",
  },
  {
    id: 9,
    question: "I see myself as someone who tends to find fault with others.",
  },
    {
    id: 10,
    question: "I see myself as someone who does a thorough job.",
  },
  {
    id: 11,
    question: "I see myself as someone who gets nervous easily.",
  },
    {
    id: 12,
    question: "I see myself as someone who has an active imagination.",
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

    if (!data.verificationStatus) {
      return {
        key: "email-verification",
        component: (
          <>
            <EmailVerification></EmailVerification>
          </>
        ),
      };
    }

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
    <div className="relative w-full flex justify-center">
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
