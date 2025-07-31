// @ts-ignore: Using deprecated Instagram icon as no replacement exists yet
import { ChevronDown, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { CLIC } from "@/components/CLIC/CLIC";

export default function Landing() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [clicSize, setClicSize] = useState<"sm" | "md">(getCLICSize());

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const mobileSrc = "/videos/CC.Highway.London.02.mp4";
    const desktopSrc = "/videos/CC.Highway.London.Website.mp4";

    if (videoRef.current) {
      const selectedSrc = isMobile ? mobileSrc : desktopSrc;

      if (videoRef.current.src !== location.origin + selectedSrc) {
        videoRef.current.src = selectedSrc;
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
      }
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      setClicSize(getCLICSize());
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // call once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <section className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-0"
        />

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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex items-center justify-center gap-2">
          <span className="inline-block">don’t swipe,</span>
          <CLIC
            size={clicSize}
            color="#F05A23"
            spinSpeed={3}
            staticDuration={1}
            fadeIn={true}
            className="align-middle"
          />
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-md">
          Let's start speaking to each other again
        </p>
      </section>

      <section className="bg-gray-300 w-full py-10 px-4">
        <div className="flex flex-col items-center gap-2">
          <p
            className="text-gray-900 text-4xl md:text-4xl font-semibold text-left font-thin"
            style={{ lineHeight: "1.1" }}
          >
            DOWNLOAD <br /> HERE:
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            <button className="border border-gray-800 text-gray-900 px-4 py-2 rounded-full text-base hover:bg-gray-200 transition w-fit">
              Apple iOS
            </button>
            <button className="border border-gray-800 text-gray-900 px-2 py-2 rounded-full text-base hover:bg-gray-200 transition w-fit">
              Android OS
            </button>
          </div>
        </div>
      </section>

      <footer className="mt-auto border-t border-gray-200 text-sm text-gray-600 bg-white">
        <div className="flex justify-center items-center divide-x divide-gray-300 py-4 flex-wrap">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 flex items-center gap-1 hover:text-[#F05A23] transition"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <Link to="/" className="px-4 hover:text-[#F05A23] transition">
            Privacy Policy
          </Link>
          <Link to="/" className="px-4 hover:text-[#F05A23] transition">
            Terms of Service
          </Link>
          <span className="px-4 text-xs">
            Email{" "}
            <a href="mailto:hello@cliclub.cc" className="underline">
              hello@cliclub.cc
            </a>{" "}
            for support or enquiries
          </span>
        </div>
      </footer>
    </div>
  );
}

function getCLICSize(): "sm" | "md" {
  if (typeof window === "undefined") return "md";
  return window.innerWidth < 768 ? "sm" : "md";
}
