"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { number: 1500, label: "Projects Done" },
  { number: 2000, label: "Happy Customers" },
  { number: 28, label: "Experienced Staff" },
  { number: 15, label: "Countries Worldwide" },
];

export default function Statistics() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/stats.jpg"
          alt="Statistics Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Content Box */}
      <div className="relative z-10 container max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8 bg-black/80 p-6 sm:p-10 rounded-lg shadow-lg">
        {/* Left Side - Business Impact Statement */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-lg"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white leading-snug">
            We&apos;ve helped businesses increase their revenue on average by{" "}
            <span className="text-red-500">90%</span> in their first year with us!
          </h2>
        </motion.div>

        {/* Right Side - Stats Grid (Desktop layout same rakha hai) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Animated Counter Component (Smooth & Optimized)
function AnimatedStat({ number, label }: { number: number; label: string }) {
  const count = useMotionValue(0);
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const controls = animate(count, number, {
      duration: 3,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayNumber(Math.floor(latest)), // Updates number smoothly
    });

    return () => controls.stop();
  }, [count, number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-red-600 to-black rounded-lg p-5 sm:p-6 w-full max-w-[200px] h-[120px] text-center flex flex-col justify-center shadow-xl border border-gray-700 mx-auto"
    >
      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1">{displayNumber}+</h3>
      <p className="text-white text-xs sm:text-sm">{label}</p>
    </motion.div>
  );
}
