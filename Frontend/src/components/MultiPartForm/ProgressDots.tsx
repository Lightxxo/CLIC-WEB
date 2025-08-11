// components/MultiPartForm/ProgressDots.tsx
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressDotsProps {
  step: number;
  total: number;
}

export default function ProgressDots({ step, total }: ProgressDotsProps) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8, opacity: 0.4 }}
          animate={{
            scale: step === i ? 1.2 : 0.9,
            opacity: step === i ? 1 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={cn(
            "w-3 h-3 rounded-full",
            step === i ? "bg-primary" : "bg-gray-300"
          )}
        />
      ))}
    </div>
  );
}
