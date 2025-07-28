"use client";

import { CheckCircle } from "lucide-react";

export default function SignupSuccess() {
  return (
    <div className="text-center space-y-4 mt-8">
      <CheckCircle className="mx-auto h-8 w-8 text-green-600" />

      <h2 className="text-xl font-semibold">Thanks!</h2>

      <p className="text-muted-foreground text-sm max-w-md mx-auto">
        Your application is under review. You’ll hear from us shortly.
      </p>
    </div>
  );
}
