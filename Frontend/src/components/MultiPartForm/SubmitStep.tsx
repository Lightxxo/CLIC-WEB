// components/MultiPartForm/SubmitStep.tsx
import { useFormContext } from "@/contexts/FormContext";

export default function SubmitStep() {
  const { data } = useFormContext();

  return (
    <div className="text-center space-y-2">
      <h2 className="text-xl font-semibold">Review & Submit</h2>
      <p className="text-gray-600">First Name: {data.firstName}</p>
      <p className="text-gray-600">Last Name: {data.lastName}</p>
      <p className="text-gray-600">Gender: {data.gender}</p>
      <p className="text-gray-600">Answers: {data.answers.join(", ")}</p>
      <p className="text-sm text-muted-foreground">Press Submit to complete</p>
    </div>
  );
}
