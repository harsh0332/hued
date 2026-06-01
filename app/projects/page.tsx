"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CornerDownRight, Plus } from "lucide-react";
import { projects } from "@/lib/project-data";

export default function Projects() {
  return (
    <div className="bg-bone min-h-screen pt-28 pb-32 px-6 md:px-12">
      {/* Dynamic light glowing element */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sand/10 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-24 md:mb-32">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
            Selected Works
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-charcoal tracking-tight leading-[0.95]">
            Architectural <br />
            <span className="italic font-normal font-serif text-stone">Monographs</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-stone/80 tracking-wider font-light mt-8 max-w-md leading-relaxed">
            A chronological compilation of architectural monuments, luxury interior sanctuaries, custom objects, and sensory experiences shaped by HUED since 2022.
          </p>
        </header>

        {/* Cinematic Vertical Project Stream */}
        <div className="flex flex-col space-y-28 md:space-y-40">
          {projects.map((project, index) => {
            const displayIndex = index + 1 < 10 ? `0${index + 1}` : index + 1;
            return (
              <div 
                key={project.slug}
                className="group border-t border-stone/20 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 relative"
              >
                {/* Numeric Indicator */}
                <div className="lg:col-span-1">
                  <span className="font-serif text-5xl md:text-6xl font-light text-stone/20 group-hover:text-terracotta transition-colors duration-500 block">
                    {displayIndex}
                  </span>
                </div>

                {/* Conceptual Summary & Stats */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full py-2">
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-stone font-semibold block mb-3">
                      {project.category}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal tracking-tight leading-tight mb-4 group-hover:text-terracotta transition-colors duration-500">
                      {project.title}
                    </h2>
                    <p className="font-sans text-sm font-light text-charcoal/60 leading-relaxed max-w-sm mb-8">
                      {project.story}
                    </p>
                  </div>

                  {/* Metadata strip */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-stone/10 pt-6 mt-auto">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-stone block font-bold">Location</span>
                      <span className="font-sans text-xs font-medium text-charcoal">{project.location}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-stone block font-bold">Year</span>
                      <span className="font-sans text-xs font-medium text-charcoal">{project.year}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-stone block font-bold">Built-Up Area</span>
                      <span className="font-sans text-xs font-medium text-charcoal">{project.builtUpArea}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-stone block font-bold">Site Area</span>
                      <span className="font-sans text-xs font-medium text-charcoal">{project.siteArea}</span>
                    </div>
                  </div>
                </div>

                {/* Cinematic Image Frame */}
                <div className="lg:col-span-7 relative">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block overflow-hidden bg-sand/30 aspect-[16/10] relative rounded-sm cursor-pointer border border-stone/10 shadow-[0_15px_40px_rgba(0,0,0,0.02)]"
                    data-cursor="explore"
                    data-cursor-text="OPEN"
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-w-768px) 100vw, 55vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-[2s] ease-out saturate-[0.8] group-hover:saturate-[1.1] brightness-[0.95] group-hover:brightness-100"
                    />
                    
                    {/* Dark gradient overlay on corners */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </Link>

                  {/* Micro Interaction Indicator */}
                  <div className="absolute bottom-6 right-6 pointer-events-none opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center space-x-2 text-bone font-sans text-[10px] tracking-widest uppercase font-semibold">
                    <span>Explore monograph</span>
                    <CornerDownRight size={14} className="text-terracotta" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
