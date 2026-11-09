"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, profile } from "@/data/portfolio";
import { cn, getInitials } from "@/lib/utils";

export function Navigation() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled || open
          ? "border-b border-[rgb(var(--border))] bg-[rgb(var(--bg)/0.75)] backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent"
        style={{ scaleX: progress }}
      />
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-blue-800 text-xs font-bold text-white">
            {getInitials(profile.name)}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                  active === item.id ? "text-[rgb(var(--fg))]" : "text-muted hover:text-[rgb(var(--fg))]",
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--border))]"
                    transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgb(var(--border))] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 pb-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "flex min-h-11 items-center rounded-lg px-3 py-2 text-base",
                      active === item.id ? "bg-[rgb(var(--card))] text-accent" : "text-muted",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
