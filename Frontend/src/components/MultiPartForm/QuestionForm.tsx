"use client";
import { useEffect, useState } from "react";
import { useFormContext } from "@/contexts/FormContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";

type Question = {
  question: string;
  options?: string[];
};

interface QuestionFormProps {
  index: number;
  question: Question;
  onValidityChange: (valid: boolean) => void;
  showWarning: boolean;
  renderWarnings: number;
}

const occupationGroups = [
  {
    label: "Medicine",
    options: ["Nurse / Carer", "Therapist", "Doctor", "Natural medicines", "Veterinary"],
  },
  {
    label: "Business / Corporate",
    options: [
      "Industry / Engineering",
      "Pharmaceuticals",
      "Real Estate management / estate agent",
      "Tech",
      "Gambling / Betting",
      "Events",
      "Fashion",
      "Retail",
      "Entrepreneur / Business Owner / CEO",
    ],
  },
  {
    label: "Finance / Banking / Investments",
    options: [
      "Private banking",
      "Investment banking",
      "Stocks / Trading / Market making",
      "Real Estate",
      "Venture Capital",
      "Private Equity",
    ],
  },
  {
    label: "Hospitality & Wellness",
    options: ["Wellness", "Food", "Beverage", "Hotels", "Chef", "Drinks / Viticulture"],
  },
  {
    label: "IT / Software development / Coding",
    options: ["IT / Software development / Coding"],
  },
  {
    label: "Accounting",
    options: ["Accounting"],
  },
  {
    label: "Law",
    options: ["Lawyer", "Judge", "Paralegal", "Alternative Dispute Resolution"],
  },
  {
    label: "Design",
    options: ["Architecture", "Interior Design", "Industrial / Product design"],
  },
  {
    label: "Tradesperson",
    options: ["Tradesperson"],
  },
  {
    label: "Creative arts",
    options: [
      "Artist",
      "Art Adjacent",
      "Musician",
      "Acting / Theater",
      "Film production / Writing",
      "Video games",
      "Writer",
      "Fashion designer",
      "Model",
    ],
  },
  {
    label: "Media / Communications",
    options: [
      "Journalist",
      "Public Relations",
      "Marketing",
      "Communications",
      "Music / artist management",
      "Influencer / Social media",
    ],
  },
  {
    label: "Public Services",
    options: [
      "Politics",
      "Diplomacy",
      "International Relations",
      "Emergency services",
      "Social services",
    ],
  },
  {
    label: "Social / Not-for-profit",
    options: ["Social enterprise", "Environment", "Sustainability", "Foreign aid"],
  },
  {
    label: "Education & Research",
    options: [
      "Teaching",
      "Academia",
      "Student - Undergraduate",
      "Student Higher Education",
      "Student - PhD",
      "Student – Vocational training",
    ],
  },
  {
    label: "Agriculture / Nature",
    options: ["Gardener", "Florist", "Farmer", "Agriculture - Other"],
  },
  {
    label: "Off-piste",
    options: ["Drug dealer", "Prison inmate", "Spy", "Prostitution / Escort", "Only Fans"],
  },
  {
    label: "Other",
    options: ["Other"],
  },
];

export default function QuestionForm({
  index,
  question,
  onValidityChange, showWarning, renderWarnings,
}: QuestionFormProps) {
  const { data, setData } = useFormContext();
  const [occupation, setOccupation] = useState(
    localStorage.getItem("occupation") || data.occupation || ""
  );
  const [otherOccupation, setOtherOccupation] = useState(
    localStorage.getItem("otherOccupation") || data.otherOccupation || ""
  );
  const selected = data.answers[index - 1]?.selectedAns || "";

  const setAnswer = (ans: string) => {
    const newAnswers = [...data.answers];
    newAnswers[index - 1] = {
      question: question.question,
      selectedAns: ans,
    };
    setData({ ...data, answers: newAnswers });
  };

    useEffect(() => {
    if (showWarning) {
      toast.error("Please select your answer!", {
        action: {
          label: "Close",
          onClick: () => void 0,
        },
      });
    }
  }, [renderWarnings])

  // Report validity (answer selected)
  useEffect(() => {
    if (question.options) onValidityChange(selected.trim() !== "");
  }, [selected, onValidityChange]);

  useEffect(() => {
    if (!question.options) {
      setData((prev) => ({ ...prev, occupation, otherOccupation }));
      localStorage.setItem("occupation", occupation); localStorage.setItem("otherOccupation", otherOccupation);
      if (occupation == "Other") onValidityChange(Boolean(occupation) && Boolean(otherOccupation));
      else onValidityChange(Boolean(occupation));
    }
  }, [occupation, otherOccupation]);

  return (
    <div className="space-y-4">
      {index == 0 && (
        <p className="text-center mb-4">
          <b>
            {/* Answer 8 multiple choice questions (pick only one most suitable answer), 
            so we can find pools with other members most suitable for you.   */}
            Answer 3 multiple choice questions (pick only one most suitable answer).
          </b>
        </p>
      )}

      <p className="text-lg font-medium">
        {index + 1}. {question.question}
      </p>
      {!question.options ? 
      <>
      <div className="w-full max-w-md space-y-2">
      <Select.Root value={occupation} onValueChange={setOccupation}>
        <Select.Trigger className="flex h-11 w-full items-center justify-between rounded-xl border border-zinc-300 bg-white px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-zinc-900">
          <Select.Value placeholder="Select your occupation" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="z-50 max-h-80 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
            <Select.Viewport className="p-2">
              {occupationGroups.map((group) => (
                <Select.Group key={group.label}>
                  <Select.Label className="px-2 py-1.5 text-xs font-semibold uppercase text-zinc-500">
                    {group.label}
                  </Select.Label>

                  {group.options.map((option) => (
                    <Select.Item
                      key={`${group.label}-${option}`}
                      value={option}
                      className="relative flex cursor-pointer select-none items-center rounded-lg px-8 py-2 text-sm text-zinc-900 outline-none hover:bg-zinc-100 focus:bg-zinc-100"
                    >
                      <Select.ItemIndicator className="absolute left-2">
                        <CheckIcon />
                      </Select.ItemIndicator>
                      <Select.ItemText>{option}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Group>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {occupation === "Other" && (
        <input
          value={otherOccupation}
          onChange={(e) => setOtherOccupation(e.target.value)}
          placeholder="Please enter your occupation"
          className="h-11 w-full rounded-xl border border-zinc-300 px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
      )}
    </div>
      </>
      : 
      <>
      {question.options.map((opt, i) => {
        const letter = String.fromCharCode(97 + i); // 97 = 'a'
        return (
          <button
            key={i}
            onClick={() => setAnswer(opt)}
            className={cn(
              "w-full p-2 border rounded-md text-left",
              selected === opt
                ? "bg-[#B46E28] hover:bg-[#945A21] text-white"
                : "bg-white"
            )}
          >
            {`(${letter}) ${opt}`}
          </button>
        );
      })}
      </>}
    </div>
  );
}
