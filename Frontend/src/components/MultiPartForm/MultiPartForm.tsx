"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import ProgressDots from "./ProgressDots";
import UserCredentials from "./UserCredentials";
import QuestionForm from "./QuestionForm";
import SubmitStep from "./SubmitStep";
import Occupation from "./Occupation";

type Question = {
  question: string;
  options: string[];
};

type Props = {
  questions: Question[];
};

export default function MultiPartForm({ questions }: Props) {
  const [step, setStep] = useState(0);

  const [showWarning, setShowWarning] = useState(false);
  const [renderWarnings, setRenderWarnings] = useState(0);

  const [validityMap, setValidityMap] = useState<Record<number, boolean>>({ 0: false });

  const totalSteps = questions.length + 3;

  const setStepValidity = useCallback((stepIndex: number, isValid: boolean) => {
    setValidityMap((prev) => {
      if (prev[stepIndex] === isValid) return prev;
      return { ...prev, [stepIndex]: isValid };
    });
  }, []);

  const next = () => {
    setShowWarning(false);
    if (!validityMap[step]) {
      setShowWarning(true); setRenderWarnings(renderWarnings + 1); return;
    }
    setStep((prev) => Math.min(prev + 1, totalSteps - 1));
  }
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  const currentComponent = () => {
    if (step === 0)
      return <UserCredentials onValidityChange={(v) => setStepValidity(0, v)} showWarning={showWarning} 
                renderWarnings={renderWarnings} />;
    if (step === 1)
      return (
        <Occupation
          onValidityChange={(v) => setStepValidity(step, v)}
          showWarning={showWarning} renderWarnings={renderWarnings}
        />
      );
    if (step > 1 && step <= questions.length + 1)
      return (
        <QuestionForm
          index={step - 1}
          question={questions[step - 2]}
          onValidityChange={(v) => setStepValidity(step, v)}
          showWarning={showWarning} renderWarnings={renderWarnings}
        />
      );
    return <SubmitStep />;
  };

  // const isNextDisabled = !validityMap[step];

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
            {step < totalSteps - 1 && (
              <Button
                className="bg-[#B46E28] hover:bg-[#945A21] text-white"
                onClick={next}
                // disabled={isNextDisabled}
              >
                Next
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
