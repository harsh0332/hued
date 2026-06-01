"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discover",
    subtitle: "Contextual Immersion",
    desc: "We begin by listening. We dive deep into the context of the site, the lifestyle of the inhabitants, and the emotional resonance of the brand, identifying raw opportunities for meaningful design."
  },
  {
    num: "02",
    title: "Define",
    subtitle: "Spatial Philosophy",
    desc: "Formulating a clear architectural thesis. We conceptualize the flow of light, shadows, circulation, and material honesty, creating a unique spatial vision that guides every subsequent line."
  },
  {
    num: "03",
    title: "Design",
    subtitle: "Volumetric Crafting",
    desc: "Translating philosophy into three-dimensional volumes. We refine plans, craft details, model scale relationships, and choreograph visual pathways, balancing structural rigor with emotional warmth."
  },
  {
    num: "04",
    title: "Develop",
    subtitle: "Material Sensitivity",
    desc: "Selecting the precise limestone, timber, glass, and metal compositions. We detail junctions, coordinate structural engineering, and ensure that tactile surfaces will stand and age beautifully over time."
  },
  {
    num: "05",
    title: "Deliver",
    subtitle: "Timeless Execution",
    desc: "Translating drawing into physical travertine and wood. Under Ar. Kritika's direction, we work alongside skilled craftsmen and structural specialists, bringing the vision to life with absolute precision."
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply horizontal scroll on desktop and when reduced-motion is not preferred
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReduced || isMobile) return;

    const scrollSection = scrollRef.current;
    const container = containerRef.current;

    if (!scrollSection || !container) return;

    const totalWidth = scrollSection.scrollWidth - window.innerWidth;

    const pin = gsap.to(scrollSection, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollSection.scrollWidth}`,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      pin.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative md:h-screen bg-sand/30 py-24 md:py-0 overflow-hidden flex items-center"
    >
      {/* Background large typography watermarks */}
      <div className="absolute top-12 left-12 md:left-24 font-serif text-[11vw] font-extrabold text-stone/10 select-none pointer-events-none uppercase tracking-wider leading-none">
        Methodology
      </div>

      {/* Horizontal scrolling block */}
      <div 
        ref={scrollRef} 
        className="flex flex-col md:flex-row md:flex-nowrap gap-12 md:gap-0 px-6 md:px-24 w-full md:w-max h-auto md:h-[60%] items-center"
      >
        {/* Intro Card */}
        <div className="flex-shrink-0 w-full md:w-[450px] pr-8 md:pr-16 flex flex-col justify-center mb-8 md:mb-0">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-terracotta font-semibold mb-3">
            Our Process
          </span>
          <h3 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            From Philosophy <br />to Material Reality.
          </h3>
          <p className="font-sans text-[15px] leading-relaxed text-charcoal/60 font-light max-w-sm">
            We follow a structured 5-phase methodology that ensures absolute design integrity, combining rigorous spatial planning with tactile craftsmanship.
          </p>
          
          {/* Visual indicator of horizontal navigation on desktop */}
          <div className="hidden md:flex items-center space-x-3 mt-10 text-[10px] uppercase tracking-widest text-stone font-semibold">
            <span>Scroll Down</span>
            <div className="w-12 h-[1px] bg-stone/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-terracotta animate-pulse" />
            </div>
            <span>Explore</span>
          </div>
        </div>

        {/* Step cards */}
        {steps.map((step, idx) => (
          <div 
            key={step.num}
            className="flex-shrink-0 w-full md:w-[400px] h-full md:px-12 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stone/20 pt-8 md:pt-4 md:pb-4 relative group"
          >
            {/* Background card highlight */}
            <div className="absolute inset-0 bg-bone/0 group-hover:bg-bone/20 transition-colors duration-500 rounded-lg -z-10" />

            <div>
              <span className="font-serif text-5xl md:text-6xl font-light text-terracotta/40 group-hover:text-terracotta transition-colors duration-500 block mb-6">
                {step.num}
              </span>
              <h4 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-2">
                {step.title}
              </h4>
              <span className="font-sans text-[11px] uppercase tracking-widest text-stone font-medium block mb-6">
                {step.subtitle}
              </span>
            </div>

            <p className="font-sans text-[14px] leading-relaxed text-charcoal/60 font-light">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
