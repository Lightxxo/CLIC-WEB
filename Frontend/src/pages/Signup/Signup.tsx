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
    question: "How do you spend most of your time with other people?",
    options: [
      "I prioritize my family first and foremost, all else is secondary",
      "I socialize in a close tight-knit group, some of us have known each other since childhood",
      "I make sure to maintain a large social/professional network",
      "I maintain a large community of like minded people who share my lifestyle",
      "I engage with an eclectic collection of people I've met from all walks of life",
    ],
  },
  {
    id: 2,
    question: "Which is the most important trait you look for in a partner?",
    options: [
      "Driven",
      "Grounded / stable / steadfast",
      "Creative",
      "Silly / can laugh at themselves",
      "Adventurous",
    ],
  },
    {
    id: 3,
    question: "Which singular trait most fittingly describes you?",
    options: [
      "Driven",
      "Grounded / stable / steadfast",
      "Creative",
      "Silly / can laugh at themselves",
      "Adventurous",
    ],
  },
  {
    id: 4,
    question: "Success: what does success mean to you?",
    options: [
      "Professional success",
      "Material wealth",
      "A stable family unit",
      "A life well lived, rich with experiences",
      "Personal contentment, spiritual awakening and/or emotional freedom",
    ],
  },
  {
    id: 5,
    question: "Drugs: Have you taken recreational drugs?",
    options: [
      "No way. I hate what it does to people / the opportunity has never arisen.",
      "Yes, there have been occasions.",
      "Yes, there have been a few occasions but I would only do it if it's on offer.",
      "Yes, I've been around the block but I opt out now.",
      "Sure - Do you have any on you now",
    ],
  },
  {
    id: 6,
    question: "Lifestyle: I would prioritize having one of the following holidays in any given year",
    options: [
      "Travel to a city for a cultural event or fair where I can eat well, dress up",
      "Attend Burning Man or other dance music festival / or go to a party town (Mykonos, St Anton, Verbier, Ibiza, etc.)",
      "Wholesome camping or hiking trip",
      "Week or two surfing, playing beach volleyball or yoga",
      "Campervan / other adventurous or exploratory trip which may or may not include psychedelics",
    ],
  },

  {
    id: 7,
    question: "Spirituality:",
    options: [
      "I believe in what material science can prove (only)",
      "I believe in organised religion and practice regularly.",
      "I am open to religion or spirituality but don't actively practise / engage",
      "I believe we exist in a spiritual realm where there is more than meets the eye and more than what we understand",
      "I interact with the spiritual world",
    ],
  },

  {
    id: 8,
    question: "How would you describe your taste in music?",
    options: [
      "Contemporary Classic, e.g. Coldplay, U2, Beyoncé",
      "Anything I can dance to",
      "Whatever someone else is playing / on the radio",
      "Eclectic; anything new and original from any genre or country",
      "True connoisseur - Classical or jazz",
    ],
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
