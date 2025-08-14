"use client";

import { useEffect } from "react";
import { useFormContext } from "@/contexts/FormContext";
import { cn } from "@/lib/utils";

type Question = {
  question: string;
  options: string[];
};

interface QuestionFormProps {
  index: number;
  question: Question;
  onValidityChange: (valid: boolean) => void;
}

export default function QuestionForm({
  index,
  question,
  onValidityChange,
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

  // Report validity (answer selected)
  useEffect(() => {
    onValidityChange(selected.trim() !== "");
  }, [selected, onValidityChange]);

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">
        {index + 1}. {question.question}
      </p>

      <div className="space-y-2">
        {question.options.map((opt, i) => (
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
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
