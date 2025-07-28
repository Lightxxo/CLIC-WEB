"use client";

import { CLIC } from "@/components/CLIC/CLIC";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const steps = [
  "Sign up\nComplete a short questionnaire to become a member of Clic Club. Clic Club gives you access to pools of like-minded people to connect with from the inside out, through conversation, and not the outside in based on photos.",
  "RSVP for a pool\n(Dating) Pools are live online events at which you speak to a series of members in short video dates. We pool together the most appropriate members for each event.",
  "Did you Clic?\nThe events and video dates are scheduled for a fixed duration. If you Clic with a member, you’ll have the option to extend your date. If they also Clic’d with you, you can speak to each other for a bit longer. But remember that each extension could be reducing the time you might have speaking to the other members at the event. Is a bird in hand worth two in the bush?",
  "Feedback\nWe‘re just starting out. As we work on improving your experience, we would love to hear your thoughts. Please complete the short feedback form after each date.",
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstCircleRef = useRef<HTMLDivElement>(null);
  const lastCircleRef = useRef<HTMLDivElement>(null);
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [lineLeft, setLineLeft] = useState(0);

  useEffect(() => {
    function updateLine() {
      if (
        containerRef.current &&
        firstCircleRef.current &&
        lastCircleRef.current
      ) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const firstRect = firstCircleRef.current.getBoundingClientRect();
        const lastRect = lastCircleRef.current.getBoundingClientRect();

        // Calculate vertical line position relative to container
        const top = firstRect.top + firstRect.height / 2 - containerRect.top;
        const bottom = lastRect.top + lastRect.height / 2 - containerRect.top;
        const height = bottom - top;

        // Calculate horizontal line left aligned with circles center
        const left = firstRect.left + firstRect.width / 2 - containerRect.left;

        setLineTop(top);
        setLineHeight(height);
        setLineLeft(left);
      }
    }

    updateLine();
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Animation container */}
        <div className="mb-6 p-6 rounded-lg bg-[#CDA0C3] flex justify-center items-center">
          <CLIC color="#B46E28" />
        </div>

        {/* Tagline */}
        <div className="text-center mb-18 mt-6">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800 max-w-xl mx-auto leading-snug">
            Join the pool
          </p>
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-xl mx-auto mt-2 leading-relaxed">
            Talk to members we know you’ll Clic with at live online events
          </p>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
          How It Works
        </h2>

        {/* Timeline container */}
        <div ref={containerRef} className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute w-[2px] bg-black rounded"
            style={{
              top: lineTop,
              left: lineLeft,
              height: lineHeight,
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />

          {/* Steps */}
          {steps.map((step, index) => {
            // Split first line as title, rest as description
            const [title, ...descLines] = step.split("\n");
            const description = descLines.join("\n");

            return (
              <div
                key={index}
                className="relative flex items-start mb-16 last:mb-0"
              >
                {/* Step circle */}
                <div
                  ref={
                    index === 0
                      ? firstCircleRef
                      : index === steps.length - 1
                      ? lastCircleRef
                      : undefined
                  }
                  className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-black bg-white text-gray-700 font-bold shrink-0 mt-1 select-none"
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </div>

                {/* Horizontal connector line */}
                <div
                  className="h-[2px] bg-black mt-6 ml-3 mt-8"
                  style={{ width: 28, marginLeft: "0px" }}
                  aria-hidden="true"
                />

                {/* Content card */}
                <div className="flex-1">
                  <Card className="shadow-sm border-2 border-black">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">
                        {title}
                      </h3>
                      <p className="whitespace-pre-line text-gray-800 text-sm sm:text-base leading-relaxed">
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
