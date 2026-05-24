"use client";
import { useEffect } from "react";
import { useFormContext } from "@/contexts/FormContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

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

export default function QuestionForm({
  index,
  question,
  onValidityChange, showWarning, renderWarnings,
}: QuestionFormProps) {
  const { data, setData } = useFormContext();

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
    onValidityChange(Boolean(selected));
  }, [selected, onValidityChange]);


  return (
    <div className="space-y-4">

      <p className="text-lg font-medium">
        {index + 1}. {question.question}
      </p>

      {question.options && question.options.map((opt, i) => {
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

    </div>
  );
}
