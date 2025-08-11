import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
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
        <Link
          to="/privacypolicy"
          className="px-4 hover:text-[#F05A23] transition"
        >
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
  );
}
