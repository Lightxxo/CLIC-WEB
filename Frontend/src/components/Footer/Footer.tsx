import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 text-sm bg-[#005A2D] text-[#00C3FF]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop / Tablet Layout */}
        <div className="hidden md:flex justify-between items-center gap-4 flex-nowrap">
          {/* Left */}
          <div className="text-lg font-semibold whitespace-nowrap">
            Clic – Don’t Swipe
          </div>

          {/* Middle */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center divide-x divide-[#00C3FF] flex-wrap justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 flex items-center gap-1 hover:text-white transition"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <Link
                to="/privacypolicy"
                className="px-4 hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/termsofuse"
                className="px-4 hover:text-white transition"
              >
                Terms of Use
              </Link>
              <span className="px-4 text-xs whitespace-normal">
                Email{" "}
                <a
                  href="mailto:hello@cliclub.cc"
                  className="underline hover:text-white"
                >
                  hello@cliclub.cc
                </a>{" "}
                for support or enquiries
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span className="hidden lg:inline-block">Download the App</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="rounded-full px-5 text-base bg-[#005A2D] text-[#00C3FF] border-2 border-[#00C3FF] hover:bg-[#004a25] focus-visible:ring-[#00C3FF]"
              >
                Download on Android
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-5 text-base bg-[#005A2D] text-[#00C3FF] border-2 border-[#00C3FF] hover:bg-[#004a25] focus-visible:ring-[#00C3FF]"
              >
                Download on iOS
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center gap-3 md:hidden text-center">
          {/* Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="rounded-full px-5 text-base bg-[#005A2D] text-[#00C3FF] border-2 border-[#00C3FF] hover:bg-[#004a25] focus-visible:ring-[#00C3FF]"
            >
              Download on Android
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-5 text-base bg-[#005A2D] text-[#00C3FF] border-2 border-[#00C3FF] hover:bg-[#004a25] focus-visible:ring-[#00C3FF]"
            >
              Download on iOS
            </Button>
          </div>
          {/* Middle content */}
          <div className="flex flex-wrap justify-center items-center divide-x divide-[#00C3FF]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 flex items-center gap-1 hover:text-white transition"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <Link
              to="/privacypolicy"
              className="px-4 hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link to="/termsofuse" className="px-4 hover:text-white transition">
              Terms of Use
            </Link>
            <span className="px-4 text-xs whitespace-normal">
              Email{" "}
              <a
                href="mailto:hello@cliclub.cc"
                className="underline hover:text-white"
              >
                hello@cliclub.cc
              </a>{" "}
              for support or enquiries
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
