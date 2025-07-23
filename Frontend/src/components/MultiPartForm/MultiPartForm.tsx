// components/MultiPartForm/MultiPartForm.tsx
import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


import ProgressDots from "./ProgressDots";
import UserCredentials from "./UserCredentials";
import QuestionForm from "./QuestionForm";
import SubmitStep from "./SubmitStep";

type Question = {
  question: string;
  options: string[];
};

type Props = {
  questions: Question[];
};

export default function MultiPartForm({ questions }: Props) {
  const [step, setStep] = useState(0);

  const totalSteps = 1 + questions.length + 1;

  const next = () => setStep((prev) => Math.min(prev + 1, totalSteps - 1));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  const currentComponent = () => {
    if (step === 0) return <UserCredentials />;
    if (step > 0 && step <= questions.length)
      return <QuestionForm index={step - 1} question={questions[step - 1]} />;
    return <SubmitStep />;
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ProgressDots step={step} total={totalSteps} />
      <Card className="mt-4">
        <CardContent className="p-4 space-y-4">
          {currentComponent()}
          <div className="flex justify-between pt-4">
            <Button onClick={prev} disabled={step === 0} variant="outline">
              Back
            </Button>
            {step < totalSteps - 1 ? (
              <Button onClick={next}>Next</Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
