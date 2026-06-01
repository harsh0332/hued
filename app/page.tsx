"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, CornerDownRight } from "lucide-react";
import ProcessSection from "@/components/home/ProcessSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import { projects } from "@/lib/project-data";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [lowConnection, setLowConnection] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // We showcase House of Whites, Prana, Veda, and Paras in Featured Projects
  const featuredSlugs = ["house-of-whites", "prana", "veda-hotel", "paras-abhushan-bhandar"];
  const featuredProjects = projects.filter((p) => featuredSlugs.includes(p.slug));

  const disciplines = [
    { name: "Architecture", desc: "Crafting structural monuments that respond to context, light, and climate.", year: "Est. 2022" },
    { name: "Interior Design", desc: "Sensory interior sanctuaries focusing on raw textures and volume.", year: "Est. 2022" },
    { name: "Product Design", desc: "Bespoke furniture and lighting sculpted for spatial harmony.", year: "Est. 2023" },
    { name: "Fashion Design", desc: "Exploring materiality, drapery, and tactile geometries.", year: "Est. 2024" },
    { name: "Creative Consulting", desc: "Distilling brand aesthetics into physical and visual realities.", year: "Est. 2023" },
  ];

  const testimonials = [
    {
      quote: "HUED did not build us a house; they crafted a sensory journey. The way light shifts across the travertine surfaces throughout the day is pure poetry. They elevated our lifestyle to an art form.",
      author: "Private Residence Client",
      location: "Shivpuri, M.P."
    },
    {
      quote: "Kritika's sensitivity to details and honest use of materials created a space that feels deeply authentic. Visitors to our retail showroom are immediately struck by the quiet elegance of the space.",
      author: "Director, Paras Aabhushan Bhandar",
      location: "Kalkaji, Delhi"
    }
  ];

  return (
    <div className="relative w-full">
      {/* SECTION 01 — HERO */}
      <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-12 pb-16 px-6 md:px-12 overflow-hidden bg-bone">
        {/* Cinematic Video or Fallback Image Background */}
        <div className="absolute inset-0 z-0 bg-charcoal">
          {!lowConnection ? (
            <motion.video
              ref={videoRef}
              src="/video.mp4"
              autoPlay
              muted
              playsInline
              loop
              onPlay={() => setVideoLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none object-[center_30%] md:object-center"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={videoLoaded ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 1.06 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            />
          ) : null}

          {/* Graceful Fallback image (if network is slow or video failed to play) */}
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
            initial={{ opacity: 0, y: 40 }}
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
              animate={{ y: [0, 6, 0] }}
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

      {/* SECTION 02 — MANIFESTO */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-bone border-t border-stone/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
              Manifesto
            </span>
            <p className="font-serif text-lg italic text-stone/80">
              The Essence of HUED
            </p>
          </div>
          
          <div className="lg:col-span-8">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-charcoal tracking-tight max-w-3xl">
              We believe architecture should not compete for attention. <br className="hidden md:block" />
              <span className="italic font-normal font-serif text-terracotta">It should quietly elevate life.</span>
            </h3>
            
            <div className="w-16 h-[1px] bg-stone/40 my-10" />
            
            <p className="font-sans text-lg md:text-xl font-light text-charcoal/70 leading-relaxed max-w-2xl">
              Established in 2022 by Ar. Kritika Khandelwal, HUED operates at the intersection of emotion, materiality, and timeless craft. We reject the loud, generic, and mass-produced, choosing instead to sculpt spaces that age beautifully and resonate deeply with the human soul.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03 — FEATURED PROJECTS */}
      <section className="py-24 bg-bone border-t border-stone/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
                Selected Works
              </span>
              <h3 className="font-serif text-4xl md:text-5xl font-light text-charcoal tracking-tight">
                Featured Projects
              </h3>
            </div>
            <Link 
              href="/projects" 
              className="group flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-charcoal/60 hover:text-charcoal transition-colors duration-300 mt-6 md:mt-0 font-semibold"
            >
              <span>View All Projects</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Alternating Projects Layout */}
          <div className="flex flex-col space-y-32 md:space-y-48">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={project.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Block */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block group overflow-hidden bg-sand/30 aspect-[4/3] relative rounded-sm cursor-pointer"
                      data-cursor="view"
                      data-cursor-text="VIEW"
                    >
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-w-768px) 100vw, 55vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-[1.8s] ease-out saturate-75 hover:saturate-100"
                      />
                    </Link>
                  </div>

                  {/* Metadata Block */}
                  <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "" : "lg:order-1"}`}>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone font-semibold block mb-3">
                      {project.category} · {project.year}
                    </span>
                    <h4 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight mb-4">
                      {project.title}
                    </h4>
                    <p className="font-sans text-sm md:text-base font-light text-charcoal/60 leading-relaxed mb-8 max-w-md">
                      {project.story}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider text-charcoal/50">
                      <div>
                        <span className="text-[9px] text-stone block font-bold">Location</span>
                        <span className="font-medium text-charcoal">{project.location}</span>
                      </div>
                      <div className="h-6 w-[1px] bg-stone/20" />
                      <div>
                        <span className="text-[9px] text-stone block font-bold">Built-Up</span>
                        <span className="font-medium text-charcoal">{project.builtUpArea}</span>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-terracotta border-b border-terracotta/30 pb-1 hover:border-terracotta transition-all duration-300"
                      >
                        <span>Explore Story</span>
                        <CornerDownRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04 — DESIGN DISCIPLINES */}
      <section className="py-32 px-6 md:px-12 bg-charcoal text-bone border-t border-graphite">
        <div className="max-w-7xl mx-auto">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
            Practice
          </span>
          <h3 className="font-serif text-4xl md:text-5xl font-light text-bone tracking-tight mb-20">
            Disciplines of Design
          </h3>

          <div className="flex flex-col border-t border-graphite">
            {disciplines.map((d, index) => (
              <div 
                key={d.name}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-graphite items-center hover:bg-graphite/10 transition-colors duration-500 relative px-2 cursor-default"
              >
                <div className="md:col-span-1 text-[11px] tracking-widest text-stone/50 font-sans group-hover:text-terracotta transition-colors duration-300">
                  0{index + 1}
                </div>
                <div className="md:col-span-4 font-serif text-2xl md:text-3xl font-light text-bone group-hover:translate-x-2 transition-transform duration-500 ease-out">
                  {d.name}
                </div>
                <div className="md:col-span-5 font-sans text-sm font-light text-stone/60 leading-relaxed">
                  {d.desc}
                </div>
                <div className="md:col-span-2 text-right text-[10px] font-sans tracking-widest uppercase text-stone/40">
                  {d.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — PROCESS (GSAP HORIZONTAL SCROLL) */}
      <ProcessSection />

      {/* SECTION 06 — SIGNATURE PROJECT EXPERIENCE */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/house-of-whites/house-of-whites_5_1.png"
            alt="Immersive Architecture Experience"
            fill
            className="object-cover opacity-80 filter brightness-[0.4] saturate-75"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.30em] text-terracotta font-bold block mb-4">
            Signature Experience
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-bone leading-tight tracking-tight mb-8">
            Step Into a Sanctuary <br />
            of Absolute Silence.
          </h2>
          <p className="font-sans text-sm md:text-base font-light text-stone leading-relaxed max-w-xl mb-10 opacity-90">
            Discover a spatial exploration of form, Travertine masonry, and fluted oak, crafted contextually for the modern lifestyle.
          </p>
          <Link
            href="/projects/house-of-whites"
            className="inline-flex items-center space-x-3 bg-bone text-charcoal px-8 py-4 rounded-none font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-terracotta hover:text-bone transition-colors duration-500"
            data-cursor="explore"
          >
            <span>Experience House of Whites</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* SECTION 07 — FOUNDER STORY */}
      <section className="py-32 px-6 md:px-12 bg-bone border-b border-stone/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Text */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
              Visionary
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-charcoal mb-8">
              Ar. Kritika Khandelwal <br />
              <span className="italic font-normal font-serif text-stone">Founder & Creative Director</span>
            </h3>
            
            <p className="font-sans text-base leading-relaxed text-charcoal/70 font-light mb-6">
              Design is a narrative. It is an evolving dialogue that bridges art, volume, context, and purpose. Ar. Kritika Khandelwal founded HUED in 2022 to pioneer a tactile, human-centric language in contemporary Indian architecture.
            </p>
            <p className="font-sans text-base leading-relaxed text-charcoal/70 font-light mb-8">
              Believing that architecture should evoke raw emotion rather than compete for attention, Kritika frames HUED not as a conventional architectural agency, but as an international-caliber multidisciplinary design studio shaping custom experiences, bespoke objects, and residences that feel deeply lived in.
            </p>
            
            <div className="flex items-center space-x-8">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-stone block font-bold">Role</span>
                <span className="font-serif text-sm italic text-charcoal font-medium">Design Thinker</span>
              </div>
              <div className="h-8 w-[1px] bg-stone/20" />
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-stone block font-bold">Approach</span>
                <span className="font-serif text-sm italic text-charcoal font-medium">Material Sensibility</span>
              </div>
            </div>
          </div>

          {/* Editorial Portrait */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[3/4] max-w-md mx-auto bg-sand/30 border border-stone/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
              <img
                src="/team/team_18_1.png"
                alt="Ar. Kritika Khandelwal - Founder of HUED"
                className="w-full h-full object-cover saturate-[0.15] hover:saturate-[0.6] transition-all duration-[1.5s]"
              />
              {/* Artistic border frame */}
              <div className="absolute inset-4 border border-bone/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — TEAM GRID */}
      <section className="py-24 px-6 md:px-12 bg-sand/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
                The Studio
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight">
                Our Team of Craftsmen
              </h3>
            </div>
            <Link
              href="/studio"
              className="group flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-charcoal/60 hover:text-charcoal transition-colors duration-300 mt-6 md:mt-0 font-semibold"
            >
              <span>Learn About the Studio</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group flex flex-col">
              <div className="relative aspect-[3/4] bg-sand/30 overflow-hidden mb-4">
                <img
                  src="/team/team_18_1.png"
                  alt="Ar. Kritika Khandelwal"
                  className="w-full h-full object-cover saturate-0 group-hover:saturate-50 group-hover:scale-102 transition-all duration-700"
                />
              </div>
              <h4 className="font-serif text-lg text-charcoal">Kritika Khandelwal</h4>
              <span className="font-sans text-[11px] uppercase tracking-widest text-stone">Founder & Creative Director</span>
            </div>

            <div className="group flex flex-col">
              <div className="relative aspect-[3/4] bg-sand/30 overflow-hidden mb-4">
                <Image
                  src="/team/team_18_2.png"
                  alt="Ar. Ankush Wahane"
                  fill
                  className="object-cover saturate-0 group-hover:saturate-50 group-hover:scale-102 transition-all duration-700"
                />
              </div>
              <h4 className="font-serif text-lg text-charcoal">Ankush Wahane</h4>
              <span className="font-sans text-[11px] uppercase tracking-widest text-stone">Lead Architect</span>
            </div>

            <div className="group flex flex-col">
              <div className="relative aspect-[3/4] bg-sand/30 overflow-hidden mb-4">
                <Image
                  src="/team/team_18_2.png"
                  alt="Ar. Shakti Gupta"
                  fill
                  className="object-cover saturate-0 group-hover:saturate-50 group-hover:scale-102 transition-all duration-700"
                />
              </div>
              <h4 className="font-serif text-lg text-charcoal">Shakti Gupta</h4>
              <span className="font-sans text-[11px] uppercase tracking-widest text-stone">Associate Architect</span>
            </div>

            <div className="group flex flex-col font-sans justify-center p-8 bg-sand/35 border border-stone/10 aspect-[3/4] text-center items-center">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-terracotta font-semibold mb-3">Collaborate</span>
              <h4 className="font-serif text-xl font-light text-charcoal mb-4">Interested in Shaping Timeless Experiences?</h4>
              <Link 
                href="/contact"
                className="text-[10px] uppercase tracking-widest font-bold text-charcoal border-b border-charcoal/30 hover:border-charcoal transition-colors pb-1"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08.5 — INSTAGRAM FEED SHOWROOM */}
      <InstagramFeed />

      {/* SECTION 09 — TESTIMONIALS */}
      <section className="py-32 px-6 md:px-12 bg-bone border-t border-stone/10 relative">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-12">
            Reflections
          </span>
          
          <div className="flex flex-col space-y-16">
            {testimonials.map((t, idx) => (
              <blockquote key={idx} className="flex flex-col items-center">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic leading-relaxed text-charcoal/80 max-w-4xl tracking-tight">
                  "{t.quote}"
                </p>
                <cite className="font-sans text-xs uppercase tracking-[0.25em] text-stone mt-6 not-italic font-semibold block">
                  {t.author} — <span className="font-serif italic font-normal text-terracotta lowercase">{t.location}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
