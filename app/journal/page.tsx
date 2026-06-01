"use client";

import Link from "next/link";
import { CornerDownRight, ArrowRight } from "lucide-react";

export default function Journal() {
  const articles = [
    {
      slug: "poetry-of-travertine",
      title: "The Poetry of Travertine: Why Natural Stone Ages Perfectly",
      category: "Material Studies",
      date: "May 12, 2026",
      readTime: "5 min read",
      excerpt: "An exploration of limestone, porosity, and thermal mass. Travertine does not merely stand; it absorbs the passage of time, taking on a rich patina that enhances the sensory quality of structural envelopes."
    },
    {
      slug: "subtractive-spaces",
      title: "Subtractive Spaces: De-cluttering Modern Indian Homes",
      category: "Design Thinking",
      date: "April 28, 2026",
      readTime: "7 min read",
      excerpt: "Moving away from heavy gold luxury and visual noise. We discuss the emotional necessity of subtraction in residential planning, where negative space is elevated to a crucial spatial element."
    },
    {
      slug: "choreography-of-diffused-light",
      title: "The Choreography of Diffused Light in Office Interiors",
      category: "Spatial Geometry",
      date: "March 15, 2026",
      readTime: "4 min read",
      excerpt: "How architectural glazing, timber screens, and fluted plaster can soft-focus glare, promoting deep concentration, comfort, and sensory wellness inside the fast-paced workplace."
    },
    {
      slug: "concrete-and-cane",
      title: "Concrete and Cane: Structuring Material Contrast",
      category: "Interior Craftsmanship",
      date: "February 22, 2026",
      readTime: "6 min read",
      excerpt: "A dialogue between the raw industrial coldness of hand-cast concrete and the warm organic softness of hand-woven cane panels. A study of texture, resonance, and traditional Indian craftsmanship."
    }
  ];

  return (
    <div className="bg-bone min-h-screen pt-28 pb-32 px-6 md:px-12">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sand/10 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-24 md:mb-32">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
            Publications
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-charcoal tracking-tight leading-[0.95] max-w-4xl">
            Design <span className="italic font-normal font-serif text-stone">Journal</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-stone/80 tracking-wider font-light mt-8 max-w-md leading-relaxed">
            Architectural observations, material studies, design essays, and insights into the creative philosophy shaping the works of HUED.
          </p>
        </header>

        {/* Magazine-style Journal List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main article showcase */}
          <div className="lg:col-span-8 flex flex-col space-y-16">
            {articles.map((art) => (
              <article 
                key={art.slug}
                className="group border-t border-stone/20 pt-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-stone font-semibold mb-4">
                    <span>{art.category}</span>
                    <div className="flex items-center space-x-3">
                      <span>{art.date}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-stone/20" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal tracking-tight group-hover:text-terracotta transition-colors duration-300 leading-tight mb-4 max-w-2xl">
                    {art.title}
                  </h2>
                  
                  <p className="font-sans text-sm font-light text-charcoal/60 leading-relaxed max-w-xl mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div>
                  <button 
                    className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal border-b border-charcoal/30 pb-1 hover:border-terracotta hover:text-terracotta transition-all duration-300 cursor-pointer"
                  >
                    <span>Read Full Essay</span>
                    <CornerDownRight size={12} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Editorial Sidebar */}
          <aside className="lg:col-span-4 lg:border-l lg:border-stone/20 lg:pl-12 flex flex-col space-y-12">
            <div>
              <h4 className="font-serif text-sm uppercase tracking-wider text-charcoal font-bold mb-4">Subscribe</h4>
              <p className="font-sans text-xs font-light text-stone leading-relaxed mb-6">
                Receive curated quarterly essays on architectural philosophy, material sourcing, and studio milestones directly to your inbox.
              </p>
              <form 
                onSubmit={(e) => e.preventDefault()}
                className="flex border-b border-stone/30 pb-2 relative"
              >
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-transparent border-none text-xs font-sans font-light focus:outline-none w-full text-charcoal placeholder:text-stone/50"
                  required
                />
                <button 
                  type="submit" 
                  className="text-stone hover:text-terracotta transition-colors duration-300 focus:outline-none cursor-pointer"
                  aria-label="Submit email"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>

            <div className="border-t border-stone/20 pt-8">
              <h4 className="font-serif text-sm uppercase tracking-wider text-charcoal font-bold mb-4 font-serif">Curated Inspirations</h4>
              <p className="font-sans text-xs italic text-stone/85 leading-relaxed">
                "We shape our buildings; thereafter they shape us." <br />
                <span className="not-italic uppercase tracking-widest text-[9px] text-stone font-bold mt-2 block">— Winston Churchill</span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
