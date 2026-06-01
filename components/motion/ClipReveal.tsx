"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ClipReveal({ children, className = "", delay = 0 }: ClipRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const clipVariants = {
    hidden: {
      clipPath: shouldReduceMotion ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
      scale: shouldReduceMotion ? 1 : 1.05,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      transition: {
        duration: 1.25,
        ease: [0.16, 1, 0.3, 1] as any,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      variants={clipVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`overflow-hidden relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
