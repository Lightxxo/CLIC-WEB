"use client";
import { useEffect } from "react";
import { useFormContext } from "@/contexts/FormContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Question = {
  question: string;
};

interface QuestionFormProps {
  index: number;
  question: Question;
  onValidityChange: (valid: boolean) => void;
  showWarning: boolean;
  renderWarnings: number;
}

const PersonalityScoring = ({
  index,
  question,
  onValidityChange, showWarning, renderWarnings,
}: QuestionFormProps) => {
  const { data, setData } = useFormContext();

  const selected = data.answers[index - 1]?.selectedAns;

  const setAnswer = (ans: number) => {
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
    onValidityChange(Boolean(selected));
  }, [selected, onValidityChange]);


  return (
    <div className="space-y-4">

      <p className="text-lg font-medium">
        {index + 1}. {question.question}
      </p>

          <button
              onClick={() => setAnswer(1)}
              className={cn(
                  "w-full p-2 border rounded-md text-left",
                  selected === 1
                      ? "bg-[#B46E28] hover:bg-[#945A21] text-white"
                      : "bg-white"
              )}
          >
              1 (Strongly Disagree)
          </button>
          <button
              onClick={() => setAnswer(2)}
              className={cn(
                  "w-full p-2 border rounded-md text-left",
                  selected === 2
                      ? "bg-[#B46E28] hover:bg-[#945A21] text-white"
                      : "bg-white"
              )}
          >
              2
          </button>
          <button
              onClick={() => setAnswer(3)}
              className={cn(
                  "w-full p-2 border rounded-md text-left",
                  selected === 3
                      ? "bg-[#B46E28] hover:bg-[#945A21] text-white"
                      : "bg-white"
              )}
          >
              3
          </button>
          <button
              onClick={() => setAnswer(4)}
              className={cn(
                  "w-full p-2 border rounded-md text-left",
                  selected === 4
                      ? "bg-[#B46E28] hover:bg-[#945A21] text-white"
                      : "bg-white"
              )}
          >
              4
          </button>
          <button
              onClick={() => setAnswer(5)}
              className={cn(
                  "w-full p-2 border rounded-md text-left",
                  selected === 5
                      ? "bg-[#B46E28] hover:bg-[#945A21] text-white"
                      : "bg-white"
              )}
          >
              5 (Strongly Agree)
          </button>


    </div>
  );
};

export default PersonalityScoring;