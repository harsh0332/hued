"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<string>("default");
  const [cursorText, setCursorText] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Buttery-smooth spring setup
  const springConfig = { damping: 45, stiffness: 450, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if the user has a precise pointer device (like a mouse or trackpad)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Event listener for contextual hover triggers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const clickable = target.closest("a, button, [role='button'], input, textarea, select");
      const cursorAttr = target.closest("[data-cursor]") as HTMLElement | null;

      if (cursorAttr) {
        const type = cursorAttr.getAttribute("data-cursor") || "custom";
        setCursorType(type);
        setCursorText(cursorAttr.getAttribute("data-cursor-text") || "");
      } else if (clickable) {
        setCursorType("pointer");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  // Variants map
  const variants = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: "var(--charcoal)",
      borderRadius: "50%",
      border: "0px solid transparent"
    },
    pointer: {
      width: 44,
      height: 44,
      backgroundColor: "rgba(22, 22, 22, 0.05)",
      border: "1px solid var(--charcoal)",
      borderRadius: "50%"
    },
    view: {
      width: 70,
      height: 70,
      backgroundColor: "var(--charcoal)",
      border: "0px solid transparent",
      borderRadius: "50%"
    },
    drag: {
      width: 70,
      height: 70,
      backgroundColor: "var(--terracotta)",
      border: "0px solid transparent",
      borderRadius: "50%"
    },
    explore: {
      width: 80,
      height: 80,
      backgroundColor: "var(--charcoal)",
      border: "0px solid transparent",
      borderRadius: "50%"
    }
  };

  const currentVariant = variants[cursorType as keyof typeof variants] || variants.default;

  return (
    <>
      {/* Tiny inner center dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 bg-charcoal rounded-full"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: cursorType === "default" ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Outer morphing ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 font-sans text-[9px] tracking-[0.2em] font-medium uppercase select-none overflow-hidden text-center"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          width: currentVariant.width,
          height: currentVariant.height,
          backgroundColor: currentVariant.backgroundColor,
          border: currentVariant.border,
          borderRadius: currentVariant.borderRadius,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 350, mass: 0.3 }}
      >
        {["view", "drag", "explore"].includes(cursorType) && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="text-bone font-semibold"
          >
            {cursorText || cursorType}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
