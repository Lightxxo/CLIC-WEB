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
  // {
  //   id: 1,
  //   question: "Describe your main pattern or socializing with other people?",
  //   options: [
  //     "I prioritize my free time for family, everything else is secondary",
  //     "I socialize in a close tight-knit group; some of us have known each other since childhood",
  //     "I engage with a large professional network",
  //     "I maintain a stable community of like minded people who share my lifestyle",
  //     "I engage sporadically with an eclectic collection of people I’ve met from all walks of life",
  //   ],
  // },
  // {
  //   id: 2,
  //   question: "Which is the most important trait you look for in a your partner?",
  //   options: [
  //     "Driven",
  //     "Grounded / stable / steadfast",
  //     "Creative",
  //     "Silly / can laugh at themselves",
  //     "Adventurous",
  //   ],
  // },
  //   {
  //   id: 3,
  //   question: "Which singular trait most fittingly describes you?",
  //   options: [
  //     "Driven",
  //     "Grounded / stable / steadfast",
  //     "Creative",
  //     "Silly / can laugh at themselves",
  //     "Adventurous",
  //   ],
  // },
  // {
  //   id: 4,
  //   question: "What does success mean to you",
  //   options: [
  //     "Professional achievement",
  //     "Material wealth",
  //     "A stable family unit",
  //     "A life well lived, rich with experiences",
  //     "Personal stability, contentment, emotional freedom",
  //   ],
  // },
  // {
  //   id: 5,
  //   question: "Drugs: Have you taken recreational drugs? (Tolerant, passive, active, actively against)",
  //   options: [
  //     "No way. I hate what it does to people.",
  //     "No, the opportunity has never arisen.",
  //     "Yes. Open to trying on occasion.",
  //     "Yes, I've been around the block but I opt out now.",
  //     "Sure - have you any on you now?",
  //   ],
  // },
  // {
  //   id: 6,
  //   question: "I would like to have one of the following holidays in any given year:",
  //   options: [
  //     "Travel to a city for a cultural event or fair where I can eat well, dress up",
  //     "Attend burning man / other dance music festival / go to a party town (Mykonos, st Anton, verbier, SoF, Ibiza, etc.)",
  //     "Wholesome recuperating countryside /camping / hiking trip",
  //     "Week or two insensitive activities - surfing / kitesurfing / skiing / beach volleyball / diving",
  //     "Adventure or exploratory trip to destination less travelled",
  //   ],
  // },

  {
    id: 1,
    question: "Your occupation:",
  },
  
  {
    id: 2,
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
    id: 3,
    question: "How would you describe your taste in music?",
    options: [
      "Country / Pop",
      "Classical / Jazz",
      "Techno / Electronic dance music",
      "Heavy Metal / Avant garde / Experimental",
      "I don’t care / whatever is playing is fine",
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
