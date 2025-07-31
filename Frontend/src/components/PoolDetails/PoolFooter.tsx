"use client";

export default function PoolFooter() {
  return (
    <div className="w-full max-w-md mx-auto p-6 border-2 border-gray-300 rounded-2xl bg-white shadow-sm">
      {/* Main heading */}
      <h1 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
        Jump into the Pool!
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
            Go to the pool event page in the app or press{" "}
            <button
              className="text-[#F05A23] underline hover:text-[#d94f1f] focus:outline-none focus:ring-2 focus:ring-[#F05A23] focus:ring-opacity-50 rounded"
              onClick={() => console.log("Link clicked")}
            >
              link
            </button>
            .
          </p>
        </div>
      </div>

      {/* Bottom quote */}
      <p className="text-center text-gray-600 text-sm md:text-base italic">
        {'"We hope you Click with some! Be curious, be natural, be yourself"'}
      </p>
    </div>
  );
}
