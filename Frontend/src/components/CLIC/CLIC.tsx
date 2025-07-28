"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export interface CLICProps {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
  spinSpeed?: number; // Duration in seconds for one full rotation
  staticDuration?: number; // Duration in seconds to stay static before spinning starts
  fadeIn?: boolean; // Enable/disable fade in animation
}

const sizeClasses: Record<NonNullable<CLICProps["size"]>, string> = {
  sm: "h-8",
  md: "h-12",
  lg: "h-16",
  xl: "h-24",
};

/**
 * CLIC Logo Component with spinning C's
 *
 * @param className - Additional CSS classes
 * @param color - Logo color (default: "#031E59")
 * @param size - Logo size: "sm" | "md" | "lg" | "xl" (default: "md")
 * @param spinSpeed - Spin duration in seconds per rotation (default: 2)
 * @param staticDuration - Duration in seconds to stay static before spinning starts (default: 0.8)
 * @param fadeIn - Enable/disable fade in animation (default: true)
 */
export function CLIC({
  className,
  color = "#031E59",
  size = "md",
  spinSpeed = 2,
  staticDuration = 0.8,
  fadeIn = true,
}: CLICProps) {
  const containerVariants: Variants = {
    initial: { opacity: fadeIn ? 0 : 1 },
    animate: {
      opacity: 1,
      transition: {
        duration: fadeIn ? 0.6 : 0,
        ease: [0, 0, 0.58, 1],
      },
    },
  };

  const spinVariants: Variants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: spinSpeed,
        ease: "linear",
        repeat: Infinity,
        delay: staticDuration,
      },
    },
  };

  return (
    <motion.div
      className={cn("flex items-center gap-1", className)}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* First C - Spinning */}
      <motion.div
        variants={spinVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className={cn("flex-shrink-0", sizeClasses[size])}
        style={{ transformOrigin: "center center" }}
      >
        <svg
          viewBox="0 0 138 138"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M68.7031 27.9701C89.1258 27.9701 106.071 42.8197 109.341 62.3096H137.058C133.609 27.607 104.325 0.501282 68.6984 0.501282C30.7564 0.501282 0 31.2475 0 69.1756C0 107.104 30.7564 137.85 68.7031 137.85C104.325 137.85 133.613 110.744 137.063 76.0416H109.346C106.076 95.5268 89.1305 110.381 68.7078 110.381C45.9417 110.381 27.486 91.9335 27.486 69.1756C27.486 46.4178 45.9417 27.9701 68.7078 27.9701H68.7031Z"
            fill={color}
          />
        </svg>
      </motion.div>

      {/* L - Static */}
      <div className={cn("flex-shrink-0", sizeClasses[size])}>
        <svg
          viewBox="0 0 65 138"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.6072 0.501282H0.196533V110.381V137.85H27.6072H64.1563V110.381H27.6072V0.501282Z"
            fill={color}
          />
        </svg>
      </div>

      {/* I - Static */}
      <div className={cn("flex-shrink-0", sizeClasses[size])}>
        <svg
          viewBox="0 0 29 142"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.2152 0.849976H0.230469V141.061H28.2152V0.849976Z"
            fill={color}
          />
        </svg>
      </div>

      {/* Second C - Spinning */}
      <motion.div
        variants={spinVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className={cn("flex-shrink-0", sizeClasses[size])}
        style={{ transformOrigin: "center center" }}
      >
        <svg
          viewBox="0 0 138 138"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M68.7031 27.9701C89.1258 27.9701 106.071 42.8197 109.341 62.3096H137.058C133.609 27.607 104.325 0.501282 68.6984 0.501282C30.7564 0.501282 0 31.2475 0 69.1756C0 107.104 30.7564 137.85 68.7031 137.85C104.325 137.85 133.613 110.744 137.063 76.0416H109.346C106.076 95.5268 89.1305 110.381 68.7078 110.381C45.9417 110.381 27.486 91.9335 27.486 69.1756C27.486 46.4178 45.9417 27.9701 68.7078 27.9701H68.7031Z"
            fill={color}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}


