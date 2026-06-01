import Image from "next/image";
import { ExternalLink } from "lucide-react";

// Inline Instagram SVG component
function InstagramIcon({ size = 16, className = "" }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const instagramPosts = [
  {
    id: 1,
    image: "/projects/house-of-whites/house-of-whites_4_1.png",
    caption: "Purity, light, and geometry. A silent sanctuary sculpted entirely in shades of white. #HUEDSpaces"
  },
  {
    id: 2,
    image: "/projects/prana/prana_9_1.png",
    caption: "Prana: An Indian Home. Where hand-cast raw concrete meets warm teak woodwork. #EmotionalArchitecture"
  },
  {
    id: 3,
    image: "/projects/veda-hotel/veda-hotel_15_1.png",
    caption: "A monumental roadside oasis. Stately sandstone facades blending European geometry with modern luxury. #Veda"
  },
  {
    id: 4,
    image: "/projects/paras-abhushan-bhandar/paras-abhushan-bhandar_7_1.png",
    caption: "Quiet luxury jewelry boutique in Kalkaji, Delhi. Designing spaces that enhance micro-details. #InteriorDesign"
  }
];

export default function InstagramFeed() {
  const instagramUrl = "https://instagram.com/hued.in_";

  return (
    <section className="py-28 px-6 md:px-12 bg-bone border-t border-stone/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
              Social Dialogue
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-ink tracking-tight">
              Live on Instagram
            </h3>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors duration-300 mt-6 md:mt-0 font-semibold cursor-pointer"
          >
            <InstagramIcon size={14} className="text-terracotta" />
            <span>@hued.in_</span>
          </a>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative aspect-square bg-sand/20 overflow-hidden border border-stone/10 rounded-sm cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.01)]"
              data-cursor="explore"
              data-cursor-text="INSTA"
            >
              <Image
                src={post.image}
                alt={`HUED Instagram post ${post.id}`}
                fill
                sizes="(max-w-768px) 100vw, 22vw"
                className="object-cover saturate-[0.8] group-hover:scale-[1.04] transition-all duration-[1.5s] ease-out group-hover:saturate-[1.1]"
              />

              {/* Hover Interactive Mask Overlay */}
              <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 text-bone">
                <div className="flex items-center justify-between">
                  <InstagramIcon size={16} className="text-terracotta" />
                  <ExternalLink size={14} className="text-stone" />
                </div>
                
                <p className="font-sans text-xs font-light leading-relaxed text-stone/90 line-clamp-4 my-auto">
                  {post.caption}
                </p>
                
                {/* Visual line divider instead of fake numbers */}
                <div className="w-8 h-[1px] bg-terracotta/40 mt-4 group-hover:w-12 transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
