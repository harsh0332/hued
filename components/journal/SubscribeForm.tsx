"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div className="text-xs font-sans text-terracotta bg-terracotta/5 border border-terracotta/10 p-3 animate-[fadeIn_0.5s_ease-out]">
        Thank you. You have been added to our quarterly mailing list.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex border-b border-stone/30 pb-2 relative">
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-transparent border-none text-xs font-sans font-light focus:outline-none w-full text-ink placeholder:text-stone/50"
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
  );
}
