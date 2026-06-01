"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-bone min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20 relative">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#161616_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute w-[50%] h-[1px] bg-stone/20 pointer-events-none" />
      <div className="absolute h-[50%] w-[1px] bg-stone/20 pointer-events-none" />

      <div className="relative z-10 max-w-xl flex flex-col items-center">
        <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-terracotta font-bold block mb-6">
          Error 404
        </span>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-charcoal leading-tight tracking-tight mb-6">
          This Space <br />
          <span className="italic font-normal font-serif text-stone">Does Not</span> Exist.
        </h1>
        
        <p className="font-sans text-sm font-light text-charcoal/60 leading-relaxed max-w-sm mb-10">
          The path you have followed is not currently aligned with our architectural grid. Let us return to structured circulation.
        </p>
        
        <Link
          href="/"
          className="inline-flex items-center space-x-3 bg-charcoal text-bone hover:bg-terracotta px-8 py-4 rounded-none font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-500 cursor-pointer"
          data-cursor="explore"
          data-cursor-text="HOME"
        >
          <span>Return to Sanctuary</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
