"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const codeSymbols = [
  { text: "</>", position: "left-2 top-[22%] sm:left-[3%]", distance: -12, angle: -14 },
  { text: "{ }", position: "right-2 top-[65%] sm:right-[3%]", distance: 18, angle: 16 },
  { text: "=>", position: "left-[5%] top-[48%] hidden md:block", distance: 22, angle: 12 },
  { text: "[ ]", position: "right-[4%] top-[30%] hidden md:block", distance: -16, angle: -18 },
  { text: "&&", position: "left-[3%] top-[85%] hidden lg:block", distance: -24, angle: 18 },
  { text: "();", position: "right-[6%] top-[80%] hidden lg:block", distance: -28, angle: -12 },
];

function FloatingCodeSymbol({
  symbol,
  progress,
}: {
  symbol: (typeof codeSymbols)[number];
  progress: MotionValue<number>;
}) {
  const y = useTransform(progress, [0, 1], ["0vh", `${symbol.distance}vh`]);
  const rotate = useTransform(progress, [0, 1], [-symbol.angle, symbol.angle]);

  return (
    <motion.span
      style={{ y, rotate }}
      className={`absolute font-mono text-2xl font-semibold text-blue-600/20 dark:text-blue-400/25 sm:text-4xl ${symbol.position}`}
    >
      {symbol.text}
    </motion.span>
  );
}

export function InteractiveBackground() {
  const reduce = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.4 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.4 });

  const { scrollYProgress } = useScroll();
  const orbA = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const orbB = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const orbC = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (reduce || !finePointer) return;
    const onMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, finePointer, mouseX, mouseY]);

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 select-none overflow-hidden">
      <motion.div
        style={{ y: orbA, rotate }}
        className="absolute -left-32 top-[15%] h-72 w-72 rounded-[40%] bg-blue-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: orbB }}
        className="absolute -right-24 top-[45%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: orbC, rotate }}
        className="absolute left-1/3 top-[75%] h-56 w-56 rounded-[35%] bg-sky-400/10 blur-3xl"
      />

      {finePointer && (
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl"
        />
      )}
      {codeSymbols.map((symbol) => (
        <FloatingCodeSymbol key={symbol.text} symbol={symbol} progress={scrollYProgress} />
      ))}
    </div>
  );
}
