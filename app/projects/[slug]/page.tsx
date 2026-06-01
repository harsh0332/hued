"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/project-data";
import { ArrowLeft, ArrowRight, CornerDownRight, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const projectIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  
  // Dynamic Next Project Calculation
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="bg-bone min-h-screen pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative h-[95vh] w-full flex items-end justify-start px-6 md:px-12 pb-16 overflow-hidden">
        {/* Fullscreen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover scale-102 saturate-75 brightness-[0.4] md:brightness-[0.6]"
            priority
          />
          {/* Subtle gradient gradient bottom-up */}
          <div className="absolute inset-0 bg-gradient-to-t from-bone via-transparent to-black/30" />
        </div>

        {/* Floating controls */}
        <div className="absolute top-8 left-6 md:left-12 z-20">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest font-semibold text-bone/60 hover:text-bone transition-colors duration-300 py-1"
          >
            <ArrowLeft size={12} />
            <span>All Selected Works</span>
          </Link>
        </div>

        {/* Hero Metadata & Title Overlap */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-terracotta font-bold block mb-4">
              {project.category}
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-bone leading-[1.0] tracking-tight max-w-5xl">
              {project.title}
            </h1>
          </motion.div>
          
          {/* Spatial Specs Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-12 w-full max-w-4xl border-t border-bone/20 pt-8"
          >
            <div>
              <span className="text-[9px] uppercase tracking-widest text-stone block font-bold">Location</span>
              <span className="font-sans text-sm font-medium text-bone/90">{project.location}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-stone block font-bold">Year</span>
              <span className="font-sans text-sm font-medium text-bone/90">{project.year}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-stone block font-bold">Built-Up Area</span>
              <span className="font-sans text-sm font-medium text-bone/90">{project.builtUpArea}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-stone block font-bold">Site Area</span>
              <span className="font-sans text-sm font-medium text-bone/90">{project.siteArea}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL STORY SECTION */}
      <section className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
            Narrative
          </span>
          <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight tracking-tight max-w-sm">
            {project.subtitle}
          </h3>
          
          <div className="w-12 h-[1px] bg-stone/40 my-8" />
          
          {/* Key materials summary */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.materials.map((m) => (
              <span 
                key={m} 
                className="font-sans text-[10px] uppercase tracking-widest bg-sand/35 border border-stone/10 px-3 py-1 text-charcoal/70 rounded-full"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/70 mb-8">
            {project.story}
          </p>
          <div className="border-l-2 border-terracotta/40 pl-6 mt-2">
            <p className="font-serif text-base italic text-stone/80 font-light leading-relaxed">
              "{project.philosophy}"
            </p>
          </div>
        </div>
      </section>

      {/* 3. MULTI-RATIO PORTFOLIO GALLERY */}
      <section className="py-12 bg-sand/10 border-t border-b border-stone/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-12 text-center">
            Visual Exploration
          </span>

          {/* Dynamic Grid using varying aspect ratios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {project.images.slice(1).map((img, idx) => {
              // Custom spanning logic for magazine layout variety
              const isFullWidth = idx % 3 === 2;
              const aspectClass = isFullWidth ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]";
              return (
                <div 
                  key={idx}
                  className={`relative overflow-hidden bg-sand/20 border border-stone/10 rounded-sm group ${aspectClass}`}
                  data-cursor="view"
                  data-cursor-text="EXPAND"
                >
                  <Image
                    src={img}
                    alt={`${project.title} detail ${idx + 2}`}
                    fill
                    sizes={isFullWidth ? "95vw" : "(max-w-768px) 100vw, 45vw"}
                    className="object-cover saturate-[0.8] hover:saturate-[1.1] hover:scale-102 transition-all duration-[1.5s]"
                  />
                  <div className="absolute bottom-4 left-4 bg-charcoal/60 backdrop-blur-sm px-3 py-1 font-sans text-[9px] uppercase tracking-widest text-bone opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Figure 0{idx + 2}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DETAILS & MATERIAL PALETTE */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
              Details
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight mb-6">
              Tactile Specifications
            </h3>
            <p className="font-sans text-sm font-light text-charcoal/60 leading-relaxed max-w-sm mb-8">
              Every detail is tailored to reflect structural honesty and longevity, utilizing natural stone, treated woodwork, and precision metal junctions that age beautifully.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.materials.map((mat, index) => (
              <div 
                key={mat} 
                className="bg-sand/20 border border-stone/10 p-6 rounded-none flex items-start space-x-4 group hover:bg-terracotta/5 transition-colors duration-500"
              >
                <span className="font-serif text-terracotta/40 group-hover:text-terracotta font-light text-xl transition-colors duration-300">
                  0{index + 1}
                </span>
                <div>
                  <h4 className="font-serif text-lg text-charcoal mb-1">{mat}</h4>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-stone font-semibold block">Natural architectural texture</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC NEXT PROJECT LOOP */}
      <section className="border-t border-stone/20 pt-20 mt-12 bg-sand/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center py-20 flex flex-col items-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-stone font-semibold mb-4 block">
            Next Monograph
          </span>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block relative overflow-hidden text-center max-w-4xl"
            data-cursor="explore"
            data-cursor-text="NEXT"
          >
            <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-charcoal group-hover:text-terracotta transition-colors duration-500 leading-tight">
              {nextProject.title}
            </h3>
            
            <p className="font-sans text-[11px] uppercase tracking-widest text-stone mt-6 font-semibold flex items-center justify-center space-x-2">
              <span>View next work</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300 text-terracotta" />
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
