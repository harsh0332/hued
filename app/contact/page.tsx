"use client";

import { useState } from "react";
import { ArrowRight, CornerDownRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "residential",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    { value: "residential", label: "Residential Architecture" },
    { value: "retail", label: "Boutique Retail Design" },
    { value: "hospitality", label: "Hospitality Architecture" },
    { value: "product", label: "Bespoke Product Design" },
    { value: "consult", label: "Creative Consulting" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", category: "residential", message: "" });
    }, 1800);
  };

  return (
    <div className="bg-bone min-h-screen pt-28 pb-32 px-6 md:px-12">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-sand/15 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-24 md:mb-28">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-terracotta font-semibold block mb-4">
            Contact Us
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-charcoal tracking-tight leading-[0.95] max-w-4xl">
            Let's Shape <br />
            Something <span className="italic font-normal font-serif text-stone">New</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Left: Studio Coords & Map Placeholder */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            <div>
              <h3 className="font-serif text-2xl font-light text-charcoal mb-4">The Studio Coords</h3>
              <p className="font-sans text-sm font-light text-stone/80 leading-relaxed max-w-sm">
                We are always open to discuss custom, bespoke monographs, luxury residential sanctuaries, retail spaces, and experiences.
              </p>
            </div>

            <div className="flex flex-col space-y-6 text-sm font-sans font-light text-charcoal/70">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone block font-bold mb-1">HQ Address</span>
                <address className="not-italic leading-relaxed">
                  60-61, Neelambar Apartment,<br />
                  Old Palasia Road, Indore,<br />
                  Madhya Pradesh 452001
                </address>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone block font-bold mb-1">Telephone</span>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+916261617200" className="hover:text-terracotta transition-colors">+91 6261 617 200</a>
                  <a href="tel:+917389368726" className="hover:text-terracotta transition-colors">+91 7389 368 726</a>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone block font-bold mb-1">Email Coordinates</span>
                <a href="mailto:work.huedspaces@gmail.com" className="hover:text-terracotta transition-colors">
                  work.huedspaces@gmail.com
                </a>
              </div>
            </div>

            {/* Abstract Artistic Map Placeholder */}
            <div className="relative aspect-[16/9] w-full bg-sand/35 border border-stone/10 rounded-sm overflow-hidden flex items-center justify-center">
              {/* Decorative design lines simulating architectural plans */}
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#161616_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute w-[80%] h-[1px] bg-charcoal/[0.08]" />
              <div className="absolute h-[80%] w-[1px] bg-charcoal/[0.08]" />
              <div className="absolute w-20 h-20 rounded-full border border-terracotta/20 animate-ping duration-[4s]" />
              <div className="absolute w-4 h-4 bg-terracotta rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-bone rounded-full" />
              </div>
              
              <span className="absolute bottom-4 left-4 font-sans text-[8px] uppercase tracking-[0.2em] text-stone font-bold">
                Old Palasia, Indore · 22.72° N, 75.88° E
              </span>
            </div>
          </div>

          {/* Right: Request Form Container */}
          <div className="lg:col-span-7 bg-sand/15 border border-stone/10 p-8 md:p-12 rounded-sm relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col space-y-8"
                >
                  <h3 className="font-serif text-2xl font-light text-charcoal">Submit Inquiry</h3>
                  
                  {/* Name field */}
                  <div className="flex flex-col space-y-2 border-b border-stone/30 pb-3 group focus-within:border-terracotta transition-all duration-300">
                    <label className="font-sans text-[9px] uppercase tracking-widest text-stone font-bold">Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name or organization" 
                      className="bg-transparent border-none text-sm font-sans font-light focus:outline-none w-full text-charcoal placeholder:text-stone/40"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-2 border-b border-stone/30 pb-3 group focus-within:border-terracotta transition-all duration-300">
                    <label className="font-sans text-[9px] uppercase tracking-widest text-stone font-bold">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address" 
                      className="bg-transparent border-none text-sm font-sans font-light focus:outline-none w-full text-charcoal placeholder:text-stone/40"
                      required
                    />
                  </div>

                  {/* Category Field */}
                  <div className="flex flex-col space-y-3">
                    <label className="font-sans text-[9px] uppercase tracking-widest text-stone font-bold block">Design Discipline</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => {
                        const isSelected = formData.category === cat.value;
                        return (
                          <button
                            key={cat.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, category: cat.value })}
                            className={`font-sans text-[10px] uppercase tracking-widest px-4 py-2 border rounded-full transition-all duration-300 ${
                              isSelected 
                                ? "bg-charcoal border-charcoal text-bone" 
                                : "bg-transparent border-stone/20 text-charcoal/60 hover:border-stone/60 hover:text-charcoal"
                            }`}
                          >
                            {cat.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col space-y-2 border-b border-stone/30 pb-3 group focus-within:border-terracotta transition-all duration-300">
                    <label className="font-sans text-[9px] uppercase tracking-widest text-stone font-bold">Concept & Scope</label>
                    <textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your spatial, volume, or object requirements..." 
                      rows={4}
                      className="bg-transparent border-none text-sm font-sans font-light focus:outline-none w-full text-charcoal placeholder:text-stone/40 resize-none"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center space-x-3 bg-charcoal text-bone hover:bg-terracotta px-8 py-4 rounded-none font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-500 cursor-pointer disabled:opacity-50"
                      data-cursor="explore"
                      data-cursor-text={isSubmitting ? "SENDING" : "SUBMIT"}
                    >
                      <span>{isSubmitting ? "Submitting Request..." : "Submit Inquiry"}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <CheckCircle2 size={56} className="text-terracotta mb-6 animate-bounce" />
                  <h3 className="font-serif text-3xl font-light text-charcoal mb-4">Inquiry Received</h3>
                  <p className="font-sans text-sm font-light text-charcoal/60 leading-relaxed max-w-sm mb-8">
                    Your design inquiry has been successfully logged. Ar. Kritika and our lead spatial consultants will review your scope and get back to you within 48 business hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-sans text-[10px] uppercase tracking-widest text-charcoal font-bold border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
