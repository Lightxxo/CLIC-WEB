import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 text-sm text-gray-600 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left */}
          <div className="font-semibold text-gray-800">
            Don't Swipe - Clic
          </div>

          {/* Middle */}
          <div className="flex items-center divide-x divide-gray-300">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 flex items-center gap-1 hover:text-[#F05A23] transition"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <Link
              to="/privacypolicy"
              className="px-4 hover:text-[#F05A23] transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/termsofuse"
              className="px-4 hover:text-[#F05A23] transition"
            >
              Terms of Use
            </Link>
            <span className="px-4 text-xs">
              Email{" "}
              <a href="mailto:hello@cliclub.cc" className="underline">
                hello@cliclub.cc
              </a>{" "}
              for support or enquiries
            </span>
          </div>

          {/* Right */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="rounded-full px-4"
            >
              Download on Android
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-4"
            >
              Download on iOS
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center gap-3 md:hidden">
          {/* Download Buttons First */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="rounded-full px-4"
            >
              Download on Android
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-4"
            >
              Download on iOS
            </Button>
          </div>

          {/* Rest of Footer */}
          <div className="flex flex-wrap justify-center items-center divide-x divide-gray-300 text-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 flex items-center gap-1 hover:text-[#F05A23] transition"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
            <Link
              to="/privacypolicy"
              className="px-4 hover:text-[#F05A23] transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/termsofuse"
              className="px-4 hover:text-[#F05A23] transition"
            >
              Terms of Use
            </Link>
            <span className="px-4 text-xs">
              Email{" "}
              <a href="mailto:hello@cliclub.cc" className="underline">
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
