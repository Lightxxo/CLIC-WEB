"use client";
import { toast } from "sonner";

export default function PoolFooter() {
  return (
    <div className="w-full max-w-md mx-auto p-6 border-2 border-gray-300 rounded-2xl bg-white shadow-sm">
      {/* Main heading */}
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 text-left">
        Jump into the Pool:
      </h1>

      {/* Instructions list */}
      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-[#F05A23] text-white rounded-full flex items-center justify-center text-sm font-semibold">
            1
          </span>
          <p className="text-gray-700 text-sm md:text-base">
            Download the app if you haven't already
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-[#F05A23] text-white rounded-full flex items-center justify-center text-sm font-semibold">
            2
          </span>
          <p className="text-gray-700 text-sm md:text-base">Login to the app</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-[#F05A23] text-white rounded-full flex items-center justify-center text-sm font-semibold">
            3
          </span>
          <p className="text-gray-700 text-sm md:text-base">
            Click on the Pools icon (the waves in the middle of the bottom of
            your screen)
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-[#F05A23] text-white rounded-full flex items-center justify-center text-sm font-semibold">
            4
          </span>
          <p className="text-gray-700 text-sm md:text-base">
            Under Confirmed Pools, click on your pool & press the big “Go live”
            button — or press link below
          </p>
        </div>
      </div>

      {/* GO LIVE link */}
      <div className="text-left mb-6">
        {/* TODO: replace "#" with purple in-app Go Live URL */}
        <a
          href="#"
          className="text-[#F05A23] underline hover:text-[#d94f1f]"
          onClick={(e) => {
            e.preventDefault();
            toast.error("Something went wrong. Please open the pool on app.");
          }}
        >
          Take me to the Pool page on app
        </a>
      </div>

      {/* Bottom quote */}
      <p className="text-left text-gray-600 text-sm md:text-base italic">
        We hope you Click with some! Be curious, be natural, be yourself
      </p>
    </div>
  );
}
