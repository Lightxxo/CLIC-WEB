// components/MultiPartForm/QuestionForm.tsx
import { useFormContext } from "@/contexts/FormContext";
import { cn } from "@/lib/utils";

type Question = {
  question: string;
  options: string[];
};

interface QuestionFormProps {
  index: number;
  question: Question;
}

export default function QuestionForm({ index, question }: QuestionFormProps) {
  const { data, setData } = useFormContext();

  const selected = data.answers[index] || "";

  const setAnswer = (ans: string) => {
    const newAnswers = [...data.answers];
    newAnswers[index] = ans;
    setData({ ...data, answers: newAnswers });
  };

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setAnswer(opt)}
            className={cn(
              "w-full p-2 border rounded-md text-left",
              selected === opt ? "bg-primary text-white" : "bg-white"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
