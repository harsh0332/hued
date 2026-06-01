import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact HUED — Multidisciplinary Design Studio",
  description: "Discuss bespoke residential monuments, custom spatial planning, interior sanctuaries, or boutique commercial developments with the HUED team.",
};

export default function Contact() {
  return (
    <div className="bg-bone min-h-screen pt-28 pb-32 px-6 md:px-12 relative">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-sand/10 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-24 md:mb-28">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
            Contact Us
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-ink tracking-tight leading-[0.95] max-w-4xl">
            Let's Shape <br />
            Something <span className="italic font-normal font-serif text-stone">New</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Left: Studio Coords & Real Google Maps Embed */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            <div>
              <h3 className="font-serif text-2xl font-light text-ink mb-4">The Studio Coords</h3>
              <p className="font-sans text-sm font-light text-graphite leading-relaxed max-w-sm">
                We are always open to discuss custom, bespoke monographs, luxury residential sanctuaries, retail spaces, and experiences.
              </p>
            </div>

            <div className="flex flex-col space-y-6 text-sm font-sans font-light text-graphite">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone block font-bold mb-1">HQ Address</span>
                <address className="not-italic leading-relaxed font-sans text-graphite/90">
                  60-61, Neelambar Apartment,<br />
                  Old Palasia Road, Indore,<br />
                  Madhya Pradesh 452001
                </address>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone block font-bold mb-1">Telephone Connection</span>
                <div className="flex flex-col space-y-1 font-sans text-graphite/90">
                  <a href="tel:+916261617200" className="hover:text-terracotta transition-colors">+91 6261 617 200</a>
                  <a href="tel:+917389368726" className="hover:text-terracotta transition-colors">+91 7389 368 726</a>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone block font-bold mb-1">Email Coordinates</span>
                <a href="mailto:work.huedspaces@gmail.com" className="hover:text-terracotta transition-colors font-sans text-graphite/90">
                  work.huedspaces@gmail.com
                </a>
              </div>
            </div>

            {/* Real responsive Indore location Google Map Embed */}
            <div className="relative aspect-[16/10] w-full bg-sand/35 border border-stone/10 rounded-sm overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.12351234567!2d75.8824!3d22.7234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd02df2501a3%3A0xe441e8c894e4604e!2sOld%20Palasia%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1780000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale opacity-[0.75] hover:opacity-100 transition-opacity duration-700"
                title="HUED Studio Old Palasia HQ Google Map"
              />
            </div>
          </div>

          {/* Right: Request Form Island */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
