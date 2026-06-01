"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p";
  delay?: number;
}

export default function RevealText({ text, className = "", tag = "h2", delay = 0 }: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = tag;

  const lines = text.split("<br />");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: shouldReduceMotion ? 0 : "110%",
      opacity: shouldReduceMotion ? 0 : 1,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  if (shouldReduceMotion) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </Tag>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="overflow-hidden"
    >
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden relative leading-tight">
            <motion.span variants={childVariants} className="block">
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
