"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Studio", href: "/studio" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6 md:py-8 ${
          isScrolled
            ? "bg-bone/85 backdrop-blur-md border-b border-stone/10 py-4 md:py-5 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.05em] font-bold text-charcoal relative group"
          >
            HUED
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-terracotta transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-charcoal/70 hover:text-charcoal relative py-1 transition-colors duration-300"
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-terracotta"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-4 z-[110] relative focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[1.5px] bg-charcoal w-full transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`h-[1.5px] bg-charcoal w-full transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] bg-charcoal w-full transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[99] bg-bone flex flex-col justify-center px-8 md:px-16"
          >
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-4xl font-light text-charcoal hover:text-terracotta transition-colors duration-300 py-2 border-b border-stone/10"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-4xl font-light text-charcoal hover:text-terracotta transition-colors duration-300 py-2 border-b border-stone/10"
              >
                Home
              </Link>
            </nav>
            <div className="absolute bottom-12 left-8 right-8 flex flex-col space-y-4 font-sans text-xs tracking-wider text-charcoal/50">
              <p>© {new Date().getFullYear()} HUED Spaces. All rights reserved.</p>
              <p>Indore · Shivpuri · Noida · Delhi</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
