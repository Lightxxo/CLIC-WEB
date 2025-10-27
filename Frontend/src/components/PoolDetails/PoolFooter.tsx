"use client";
// import { toast } from "sonner";

export default function PoolFooter() {
  return (
    <div className="bg-[#D9D9D9] p-6 shadow-[0_3px_#8c8c8c]">
      {/* Main heading */}
      <h1 className="text-xl md:text-2xl mb-6 gill-sans-bold text-left">
        Jump into the Pool:
      </h1>

      {/* Instructions list */}
      <div className="space-y-4 mb-8 text-xl">
        <div className="flex items-start gap-3">
          <span className="">
            1
          </span>
          <p className="">
            Download the app and login
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="">
            2
          </span>
          <p className="">
            Click on the Pools icon (the waves in the middle of the bottom of
            your screen)
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="">
            3
          </span>
          <p className="">
            Under Confirmed Pools, click on your pool & press the big “Go live”
            button — or press link below
          </p>
        </div>
      </div>

      {/* GO LIVE link */}
      {/* <div className="text-left mb-6"> */}
        {/* TODO: replace "#" with purple in-app Go Live URL */}
        {/* <a
          href="#"
          className="border border-[#031E59] px-3 pb-1 rounded-xl"
          onClick={(e) => {
            e.preventDefault();
            toast.error("Something went wrong. Please open the pool on app.");
          }}
        >
          Go to App
        </a>
      </div> */}

      {/* Bottom quote */}
      {/* <p className="text-left text-gray-600  italic">
        We hope you Click with some! Be curious, be natural, be yourself
      </p> */}
    </div>
  );
}
