"use client";

import { useFormContext } from "@/contexts/FormContext";
import { useState } from "react";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"; // For the spinner icon

const { REMOTE, API_BASE_URL, API_PORT } = config;

export default function SubmitStep() {
  const { data, setData } = useFormContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (SubmitStepData: any) => {
    try {
      setLoading(true);
      setError(false);

      const formData = new FormData();
      function generateRandomString(length = 8) {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      }

      const email =
        SubmitStepData.email && SubmitStepData.email.trim() !== ""
          ? SubmitStepData.email
          : `${generateRandomString()}@${generateRandomString()}.com`;

      formData.append("userName", SubmitStepData.username);
      formData.append("email", email);
      formData.append("firstName", SubmitStepData.firstName);
      formData.append("lastName", SubmitStepData.lastName);
      formData.append("password", SubmitStepData.password);
      formData.append("gender", SubmitStepData.gender || "");
      formData.append("city", "n/a");
      formData.append("ques_ans", JSON.stringify(SubmitStepData.answers));
      formData.append("interests", JSON.stringify([]));

      const fallbackUri = "src/assets/default_user.jpg";
      const fileType = fallbackUri.split(".").pop();

      try {
        const response = await fetch(fallbackUri);
        if (!response.ok) throw new Error("Failed to load fallback image");
        const blob = await response.blob();
        formData.append("profilePicture", blob, `profilePic.${fileType}`);
      } catch (err) {
        console.warn("Fallback image fetch failed. Skipping profile picture.");
      }

      const response = await fetch(
        `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/register`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setData((prev) => ({
          ...prev,
          signupSuccess: true,
        }));
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("🚨 Error during submission:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-xl font-semibold">All good to go!</h2>
      <p className="text-muted-foreground">Ready to get started</p>

      {error && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <Button
        onClick={() => onSubmit(data)}
        disabled={loading}
        className="mt-2"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Sign me up"
        )}
      </Button>
    </div>
  );
}
