"use client";

import { useFormContext } from "@/contexts/FormContext";
import { useState } from "react";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const { REMOTE, API_BASE_URL, API_PORT } = config;

export default function SubmitStep() {
  const { data, setData } = useFormContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [agreed, setAgreed] = useState(false);

  function generateRandomString(length = 8) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  }

  const onSubmit = async (SubmitStepData: any) => {
    try {
      setLoading(true);
      setError(false);

      const formData = new FormData();

      const email =
        SubmitStepData.email?.trim() !== ""
          ? SubmitStepData.email
          : `${generateRandomString()}@${generateRandomString()}.com`;

      formData.append("userName", SubmitStepData.username);
      formData.append("email", email);
      formData.append("firstName", SubmitStepData.firstName);
      formData.append("lastName", SubmitStepData.lastName);
      formData.append("password", SubmitStepData.password);
      formData.append("dateOfBirth", SubmitStepData.dateOfBirth);
      formData.append("gender", SubmitStepData.gender || "");

      formData.append("occupation", SubmitStepData.occupation || "");
      formData.append("where_live", SubmitStepData.live || "");
      formData.append("where_from", SubmitStepData.from || "");
      formData.append("cities_frequent", SubmitStepData.cities || "");
      formData.append("about", SubmitStepData.about || "");
      formData.append("city", "n/a");
      formData.append("ques_ans", JSON.stringify(SubmitStepData.answers || {}));
      formData.append("interests", JSON.stringify([]));

      if (SubmitStepData.profileImage) {
        formData.append(
          "profilePicture",
          SubmitStepData.profileImage,
          SubmitStepData.profileImage.name
        );
      } else {
        const fallbackUri = "default_user.jpg";
        const fileType = fallbackUri.split(".").pop();

        try {
          const response = await fetch(fallbackUri);
          if (!response.ok) throw new Error("Failed to load fallback image");
          const blob = await response.blob();
          formData.append("profilePicture", blob, `profilePic.${fileType}`);
        } catch {
          console.warn(
            "Fallback image fetch failed. Skipping profile picture."
          );
        }
      }

      const response = await fetch(
        `http${REMOTE ? "s" : ""}://${API_BASE_URL}:${API_PORT}/register`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("email", email);
        localStorage.setItem("userName", data.newUser.userName);
        localStorage.setItem("imgURL", data.newUser.imgURL);
        localStorage.setItem("token", data.token);
        setData((prev) => ({
          ...prev,
          verificationStatus: false,
          newUser: false,
          email: email,
          token: data.token,
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
      <h2 className="text-xl font-semibold">Done!</h2>

      {error && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <div className="flex items-start justify-center gap-2 text-left max-w-md mx-auto">
        <input
          id="agree"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 w-4 h-4 cursor-pointer flex-shrink-0"
        />
        <label htmlFor="agree" className="text-sm leading-snug">
          By signing up, I confirm that I have read and agree to the{" "}
          <a
            href="/termsofuse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Terms of Use
          </a>
        </label>
      </div>

      <Button
        onClick={() => onSubmit(data)}
        disabled={loading || !agreed}
        className="mt-2 cursor-pointer bg-[#B46E28] hover:bg-[#945A21] text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </div>
  );
}
