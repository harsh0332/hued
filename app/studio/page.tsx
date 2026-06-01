import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Studio Story — HUED",
  description: "Learn about HUED's founding philosophy, Ar. Kritika Khandelwal's creative methodology, our extended grid of craftsmen, and our timelines.",
};

const philosophies = [
  {
    title: "Tactile Honesty",
    desc: "We believe in using raw, unprocessed materials in their natural state. Travertine should look like stone, teak should smell like wood, and concrete should retain the markings of its casting sheets."
  },
  {
    title: "Emotional Geometry",
    desc: "Spaces shape human consciousness. We choreograph structural axes, light wells, and ceiling volumes to intentionally evoke sensations of absolute silence, shelter, and peace."
  },
  {
    title: "Tailored Restraint",
    desc: "True luxury lies in subtraction. We refine every line, joint, and trim, ensuring the final volumes feel expansive, uncluttered, and deeply peaceful."
  }
];

const milestones = [
  { year: "2022", title: "Studio Foundation", desc: "Ar. Kritika Khandelwal establishes HUED Spaces in Indore with a vision to merge art, architecture, and craft." },
  { year: "2023", title: "Retail Expansion", desc: "Completing key projects like Paras Abhushan Bhandar in New Delhi, setting boutique commercial standards." },
  { year: "2024", title: "Hospitality & Volume", desc: "Choreographing stately hospitality architecture with Veda: A Highway Hotel." },
  { year: "2025", title: "Bespoke Collaborations", desc: "Expanding into custom object detailing, furniture collections, and multidisciplinary design partnerships." }
];

const craftsmenList = [
  { role: "Architecture & MEP", names: ["Ar. Ankush Wahane", "Ar. Shakti Gupta"] },
  { role: "Structural Design", names: ["Er. Parag Waghela"] },
  { role: "3D Visualizations & Render", names: ["Shubham Yadav"] },
  { role: "Site Execution & Supervision", names: ["Himanshi Magradhe"] },
  { role: "Master Craftsmen & Carpenters", names: ["Dinesh Ojha", "Ramratan Singh", "Krishna"] }
];

export default function Studio() {
  return (
    <div className="bg-bone min-h-screen pt-28 pb-32 px-6 md:px-12 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-sand/10 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-24 md:mb-32">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
            The Studio
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-ink tracking-tight leading-[0.95] max-w-4xl">
            Shaping Architecture, <br />
            Interiors & <span className="italic font-normal font-serif text-stone">Experiences</span>
          </h1>
        </header>

        {/* 1. FOUNDER PROFILE & PHILOSOPHY */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-36">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-ink mb-8 leading-tight">
              We operate at the intersection of emotion, materiality, and timeless craftsmanship.
            </h2>
            <p className="font-sans text-base leading-relaxed text-graphite/90 font-light mb-6">
              HUED is a multidisciplinary design practice established in 2022 by Ar. Kritika Khandelwal. Based in Indore, our projects span residential architecture, luxury retail interiors, highway hospitality monuments, custom objects, and fashion collaborations.
            </p>
            <p className="font-sans text-base leading-relaxed text-graphite/90 font-light mb-8">
              We reject standard architectural templates and cold corporate design processes. Our vision is to frame every project as an editorial, bespoke narrative—a tailored monograph that honors its context, harnesses incoming daylight, and celebrates the honest texture of natural limestone, teak wood, and raw cast concrete.
            </p>
            
            <div className="w-12 h-[1px] bg-stone/40 my-8" />
            
            <blockquote className="font-serif text-lg italic text-stone/80 border-l border-terracotta pl-6 leading-relaxed">
              "We believe architecture should not compete for attention. It should quietly elevate life, providing an atmospheric backdrop where light, shadows, and human relationships can unfold."
              <span className="font-sans text-[10px] uppercase tracking-widest text-stone block font-bold mt-3 not-italic">
                — Ar. Kritika Khandelwal
              </span>
            </blockquote>
          </div>

          <div className="lg:col-span-5 relative aspect-[3/4] w-full overflow-hidden bg-sand/30 border border-stone/10 rounded-sm">
            <Image
              src="/team/team_18_1.png"
              alt="Ar. Kritika Khandelwal Portrait"
              fill
              sizes="(max-w-768px) 100vw, 40vw"
              className="object-cover saturate-[0.15] hover:saturate-[0.6] transition-all duration-[1.8s] ease-out"
              priority
            />
          </div>
        </section>

        {/* 2. CORE PHILOSOPHY CARDS */}
        <section className="py-24 border-t border-stone/20 mb-36">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-12">
            Our DNA
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophies.map((p) => (
              <div key={p.title} className="flex flex-col">
                <h3 className="font-serif text-xl font-light text-ink mb-4 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
                  <span>{p.title}</span>
                </h3>
                <p className="font-sans text-sm font-light text-graphite/80 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CRAFTSMEN & EXTENDED TEAM */}
        <section className="py-24 border-t border-stone/20 mb-36 bg-sand/10 px-6 md:px-12 rounded-sm">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-12">
            Craftsmen & Collaborations
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h3 className="font-serif text-3xl font-light text-ink leading-tight mb-6">
                A Unified Grid <br />of Rigor & Skill.
              </h3>
              <p className="font-sans text-sm font-light text-graphite/80 leading-relaxed mb-8 max-w-sm">
                An architectural vision is only as true as the hands that build it. At HUED, we work alongside structural engineering specialists, renderers, and master carpenters to ensure seamless, world-class execution.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-6">
              {craftsmenList.map((c) => (
                <div key={c.role} className="border-b border-stone/20 pb-6 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                  <span className="font-serif text-ink text-base font-light mb-2 sm:mb-0">{c.role}</span>
                  <div className="flex flex-wrap gap-2">
                    {c.names.map((name) => (
                      <span key={name} className="font-sans text-[11px] uppercase tracking-wider bg-bone border border-stone/10 px-3 py-1 rounded-sm text-graphite/90">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HISTORY / MILESTONES */}
        <section className="py-24 border-t border-stone/20">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-16">
            Chronology
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex flex-col border-l border-stone/30 pl-6 py-2 group hover:border-terracotta transition-colors duration-500">
                <span className="font-serif text-terracotta/40 group-hover:text-terracotta font-light text-4xl mb-4 transition-colors duration-300">
                  {m.year}
                </span>
                <h4 className="font-serif text-lg text-ink mb-2 font-light">{m.title}</h4>
                <p className="font-sans text-xs font-light text-graphite/70 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
