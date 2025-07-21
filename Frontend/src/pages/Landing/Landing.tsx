// @ts-ignore: Using deprecated Instagram icon as no replacement exists yet
import { ChevronDown, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import videoSrc from "@/assets/videos/CC.London.mp4";

export default function Landing() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black/60 to-transparent z-10" />

        <button
          onClick={() =>
            scrollRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Scroll down"
          className="absolute bottom-0 left-0 w-full z-20 px-4 py-6 flex flex-col items-center justify-center gap-1 focus:outline-none hover:bg-black/10 active:bg-black/20 transition"
        >
          <span className="text-white text-sm tracking-wide">Scroll down</span>
          <ChevronDown
            className="text-white opacity-80 animate-bounce"
            size={32}
          />
        </button>
      </section>

      <section
        ref={scrollRef}
        className="flex flex-col items-center justify-center text-center py-24 px-4 bg-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Don't Swipe,
          <span className="inline-block mx-2 text-figma-orange font-black animate-pulse">
            CLIC
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-md">
          Let's start speaking to each other again.
        </p>
      </section>

      <footer className="mt-auto border-t border-gray-200 text-sm text-gray-600 bg-white">
        <div className="flex justify-center items-center divide-x divide-gray-300 py-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 flex items-center gap-1 hover:text-figma-orange transition"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <Link to="/" className="px-4 hover:text-figma-orange transition">
            Privacy Policy
          </Link>
          <Link to="/" className="px-4 hover:text-figma-orange transition">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
