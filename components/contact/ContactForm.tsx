"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "residential",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { value: "residential", label: "Residential" },
    { value: "retail", label: "Retail Design" },
    { value: "hospitality", label: "Hospitality" },
    { value: "product", label: "Product Design" },
    { value: "consult", label: "Creative Consulting" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-linen border border-sand p-8 md:p-12 rounded-sm relative">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form 
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col space-y-8"
          >
            <h3 className="font-serif text-2xl font-light text-ink">Submit Inquiry</h3>
            
            {/* Name field */}
            <div className="flex flex-col space-y-2 border-b border-sand pb-3 focus-within:border-terracotta transition-all duration-300">
              <label className="font-sans text-[9px] uppercase tracking-widest text-stone font-bold">Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name or organization" 
                className="bg-transparent border-none text-sm font-sans font-light focus:outline-none w-full text-ink placeholder:text-stone/40"
                required
              />
            </div>

            {/* Email field */}
            <div className="flex flex-col space-y-2 border-b border-sand pb-3 focus-within:border-terracotta transition-all duration-300">
              <label className="font-sans text-[9px] uppercase tracking-widest text-stone font-bold">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your email address" 
                className="bg-transparent border-none text-sm font-sans font-light focus:outline-none w-full text-ink placeholder:text-stone/40"
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
                      className={`font-sans text-[10px] uppercase tracking-widest px-4 py-2 border rounded-full transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? "bg-ink border-ink text-bone font-medium" 
                          : "bg-transparent border-sand text-graphite/80 hover:border-stone hover:text-ink"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message field */}
            <div className="flex flex-col space-y-2 border-b border-sand pb-3 focus-within:border-terracotta transition-all duration-300">
              <label className="font-sans text-[9px] uppercase tracking-widest text-stone font-bold">Concept & Scope</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your spatial, volume, or object requirements..." 
                rows={4}
                className="bg-transparent border-none text-sm font-sans font-light focus:outline-none w-full text-ink placeholder:text-stone/40 resize-none"
                required
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center space-x-3 bg-ink text-bone hover:bg-terracotta px-8 py-4 rounded-none font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-500 cursor-pointer disabled:opacity-50"
                data-cursor="explore"
                data-cursor-text={isSubmitting ? "SENDING" : "SUBMIT"}
              >
                <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}</span>
                <ArrowRight size={14} />
              </button>
              
              <a
                href={`mailto:work.huedspaces@gmail.com?subject=Inquiry%20from%20HUED%20Website&body=Name:%20${encodeURIComponent(formData.name)}%0D%0AEmail:%20${encodeURIComponent(formData.email)}%0D%0ADiscipline:%20${encodeURIComponent(formData.category)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`}
                className="inline-flex items-center justify-center space-x-2 border border-sand text-graphite hover:text-ink hover:border-stone px-6 py-4 font-sans text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
              >
                <Mail size={12} className="text-terracotta" />
                <span>Backup Direct Mail</span>
              </a>
            </div>
          </motion.form>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-16"
          >
            <CheckCircle2 size={56} className="text-terracotta mb-6" />
            <h3 className="font-serif text-3xl font-light text-ink mb-4">Inquiry Logged</h3>
            <p className="font-sans text-sm font-light text-graphite leading-relaxed max-w-sm mb-8">
              Your inquiry has been successfully captured. Ar. Kritika and our design planning team will review the scope and coordinate back with you within 48 business hours.
            </p>
            <div className="flex flex-col space-y-4 items-center">
              <button
                onClick={() => setIsSuccess(false)}
                className="font-sans text-[10px] uppercase tracking-widest text-ink font-bold border-b border-ink/30 pb-1 hover:border-ink transition-colors cursor-pointer"
              >
                Send another inquiry
              </button>
              <span className="text-[10px] font-sans text-stone font-medium">Or directly email us at work.huedspaces@gmail.com</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
