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
    question:
      "How would you describe how you spend most of your time with other people?",
    options: [
      "I prioritize my family first & foremost, all else is secondary",
      "I socialize in a close tight-knit group, some of us have known each other since childhood",
      "I make sure to maintain a large social/professional network",
      "I maintain a large community of likeminded people who share my lifestyle",
      "I engage with an eclectic collection of people I’ve met from all walks of life",
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
    id: 4,
    question:
      "Drugs: Have you taken recreational drugs? (Tolerant, passive, active, actively against)",
    options: [
      "No way. I hate what it does to people / the opportunity has never arisen.",
      "Yes, there have been occasions.",
      "Yes, there have been a few occasions but I would only do it if it's on offer.",
      "Yes, I’ve been around the block but I opt out now.",
      "Sure - have you any on you now?",
    ],
  },
  {
    id: 5,
    question:
      "Lifestyle: I would prioritize having one of the following holidays in any given year (pick the closest fit)",
    options: [
      "Travel to a city for a cultural event or fair where I can eat well, dress up",
      "Attend Burning Man or other dance music festival / or go to a party town (Mykonos, St Anton, Verbier, SoF, Ibiza, etc.)",
      "Wholesome camping or hiking trip",
      "Week or two surfing, playing beach volleyball or yoga",
      "Campervan / other adventurous or exploratory trip which may or may not include psychedelics",
    ],
  },
  {
    id: 6,
    question: "Setbacks: How do you handle failure?",
    options: [
      "I’m very goal orientated. Failure is not an option.",
      "If you work hard, you create opportunities and your own luck.",
      "If I’m knocked back I find a way to restore the status quo (e.g., after losing work, finding similar work in the same industry)",
      "With every door that closes another one opens to create new opportunity to reinvent myself (e.g., after losing work, finding a different line of work)",
      "I roll with the punches. What goes up must come down. And vice versa.",
    ],
  },
  {
    id: 7,
    question: "Spirituality:",
    options: [
      "I believe in what material science can prove (only)",
      "I believe in organised religion and practice regularly.",
      "I am open to religion or spirituality but don’t actively practise / engage in",
      "I believe we exist in a spiritual realm where there is more than meets the eye and more than what we understand",
      "I interact with the spiritual world",
    ],
  },
  {
    id: 8,
    question:
      "How could you describe your level of engagement in Sports / physical activity?",
    options: [
      "Not active at all",
      "I like country walks / strolls in the park / walk my dog / or similar",
      "I am reasonably fit / do some sort of exercise or yoga 2-4 times a week / enjoy vigorous skiing / or similar",
      "I am very fit / ski off-piste / run marathons / or similar",
      "Run ultra marathons / triathlons / or similar",
    ],
  },
  {
    id: 9,
    question: "Love of nature: I am",
    options: [
      "An urban fox",
      "Live in the city but like weekends in the country/mountains or beach",
      "Happy to live a bohemian life in various cities, country/mountains and the beach",
      "Happy to live 50/50 city and beach",
      "Happy to live 50/50 city and country/mountains",
    ],
  },
  {
    id: 10,
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
