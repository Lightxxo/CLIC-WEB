"use client";

import { useEffect } from "react";
import { useFormContext } from "@/contexts/FormContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Question = {
  question: string;
  options: string[];
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

  const selected = data.answers[index]?.selectedAns || "";

  const setAnswer = (ans: string) => {
    const newAnswers = [...data.answers];
    newAnswers[index] = {
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
    onValidityChange(selected.trim() !== "");
  }, [selected, onValidityChange]);

  return (
    <div className="space-y-4">
      {index == 0 && (
        <p className="text-center mb-4">
          <b>
            {/* Answer the next 8 questions so we can find the best pools for you.
            We won't publish your answers. Pick the answer (only one) most
            relevant to you. */}
            Answer 8 multiple choice questions (pick only one most suitable answer), 
            so we can find pools with other members most suitable for you.  
          </b>
        </p>
      )}

      <p className="text-lg font-medium">
        {index + 1}. {question.question}
      </p>

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
    </div>
  );
}
