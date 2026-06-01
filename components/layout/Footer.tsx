"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-bone pt-32 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-graphite mt-auto">
      {/* Ambient glowing texture element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
        {/* Massive Call to Action */}
        <div className="mb-20 md:mb-28">
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-stone mb-6 font-semibold">
            Let's Collaborate
          </p>
          <Link
            href="/contact"
            className="group block relative overflow-hidden"
            data-cursor="explore"
            data-cursor-text="WRITE"
          >
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-light leading-[1.05] tracking-tight text-bone group-hover:text-sand transition-colors duration-500 max-w-4xl">
              Let's Create <br />
              <span className="italic font-normal font-serif text-terracotta group-hover:text-sand transition-colors duration-500">Something</span> <br />
              Timeless.
            </h2>
            
            {/* Magnetic underlining hint */}
            <div className="w-24 h-[1px] bg-terracotta mt-8 group-hover:w-full transition-all duration-700 ease-out" />
          </Link>
        </div>

        {/* Informational grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-graphite text-sm">
          {/* Studio Address */}
          <div>
            <h4 className="font-serif text-stone uppercase tracking-widest text-[10px] mb-4 font-bold">Studio HQ</h4>
            <address className="not-italic text-stone/70 leading-relaxed font-sans font-light">
              60-61, Neelambar Apartment,<br />
              Old Palasia Road, Indore,<br />
              Madhya Pradesh, India
            </address>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-stone uppercase tracking-widest text-[10px] mb-4 font-bold">Inquiries</h4>
            <div className="flex flex-col space-y-2 font-sans font-light text-stone/70">
              <a href="mailto:work.huedspaces@gmail.com" className="hover:text-bone transition-colors duration-300">
                work.huedspaces@gmail.com
              </a>
              <a href="tel:+916261617200" className="hover:text-bone transition-colors duration-300">
                +91 6261 617 200
              </a>
              <a href="tel:+917389368726" className="hover:text-bone transition-colors duration-300">
                +91 7389 368 726
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-stone uppercase tracking-widest text-[10px] mb-4 font-bold">Discover</h4>
            <div className="flex flex-col space-y-2 font-sans font-light text-stone/70">
              <Link href="/projects" className="hover:text-bone transition-colors duration-300">Projects Portfolio</Link>
              <Link href="/studio" className="hover:text-bone transition-colors duration-300">The Studio Story</Link>
              <Link href="/journal" className="hover:text-bone transition-colors duration-300">Design Journal</Link>
              <Link href="/contact" className="hover:text-bone transition-colors duration-300">Start a Project</Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif text-stone uppercase tracking-widest text-[10px] mb-4 font-bold">Follow</h4>
            <div className="flex flex-col space-y-2 font-sans font-light text-stone/70">
              <a href="https://instagram.com/hued.in_" target="_blank" rel="noreferrer" className="hover:text-bone transition-colors duration-300">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-bone transition-colors duration-300">LinkedIn</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-bone transition-colors duration-300">Pinterest</a>
              <a href="https://www.behance.net/kritikakhandel1" target="_blank" rel="noreferrer" className="hover:text-bone transition-colors duration-300">Behance</a>
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="flex items-center justify-between pt-8 text-[11px] tracking-wider text-stone/40 font-sans uppercase">
          <p>© {new Date().getFullYear()} HUED Spaces. Handcrafted by Antigravity.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 group hover:text-bone transition-colors duration-300 cursor-pointer py-1"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} className="transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
