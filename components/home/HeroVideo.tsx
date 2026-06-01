"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [lowConnection, setLowConnection] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Network adaptation check
    if (typeof window !== "undefined") {
      const nav = navigator as any;
      if (nav.connection) {
        const conn = nav.connection;
        if (conn.saveData || ["slow-2g", "2g", "3g"].includes(conn.effectiveType)) {
          setLowConnection(true);
        }
      }
    }
  }, []);

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-12 pb-16 px-6 md:px-12 overflow-hidden bg-bone">
      {/* Cinematic Video or Fallback Image Background */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        {!lowConnection && !shouldReduceMotion ? (
          <motion.video
            ref={videoRef}
            src="/video.mp4"
            autoPlay
            muted
            playsInline
            loop
            poster="/hero-fallback.jpg"
            onPlay={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none object-[center_30%] md:object-center"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={videoLoaded ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 1.06 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          />
        ) : null}

        {/* Graceful Fallback image (if network is slow, video failed, or prefers-reduced-motion is active) */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 1 }}
          animate={videoLoaded ? { opacity: 0 } : { opacity: 0.55 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/hero-fallback.jpg"
            alt="HUED Creative Platform Hero Fallback"
            fill
            sizes="100vw"
            className="object-cover object-[center_30%] md:object-center"
            priority
          />
        </motion.div>

        {/* Luxury Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-charcoal/45 z-[1]" />
      </div>

      {/* Top Grid / Taglines */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-20">
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-semibold text-terracotta">
          <span className="inline-block w-2 h-2 rounded-full bg-terracotta" />
          <span className="text-bone/85">Indore · Delhi · Noida</span>
        </div>
        <div className="hidden md:block" />
        <div className="text-right text-[10px] uppercase tracking-[0.25em] text-sand/80 font-semibold">
          Creative Direction V1.0
        </div>
      </div>

      {/* Big Editorial Headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-start justify-center pt-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col select-none"
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-light leading-[0.95] tracking-tight text-bone">
            Designing <br />
            <span className="italic font-normal text-terracotta">Meaningful</span> <br />
            Spaces.
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          className="font-sans text-xs md:text-sm uppercase tracking-[0.35em] text-sand/90 mt-10 font-bold"
        >
          Architecture · Interiors · Objects · Experiences
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-bone/60">
          <span>Explore</span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-terracotta" />
          </motion.div>
        </div>
        
        <div className="hidden sm:block font-serif text-[11px] italic text-sand/65">
          Timeless craft, emotional geometry.
        </div>
      </div>
    </section>
  );
}
