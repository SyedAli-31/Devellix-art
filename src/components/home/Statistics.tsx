"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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
    <section className="relative py-24 px-6 flex justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/stats.jpg"
          alt="Statistics Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      {/* Content Box */}
      <div className="relative z-10 container max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-8 bg-black/70 p-10 rounded-lg shadow-lg">
        {/* Left Side - Business Impact Statement */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left max-w-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
            We've helped businesses increase their revenue on average by{" "}
            <span className="text-red-500">90%</span> in their first year with us!
          </h2>
        </motion.div>

        {/* Right Side - Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Animated Counter Component (Same as `About` Section)
function AnimatedStat({ number, label }: { number: number; label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const controls = animate(count, number, {
      duration: 3,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayNumber(Math.floor(latest)), // Updates the number smoothly
    });

    return () => controls.stop();
  }, [count, number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-b from-red-600 to-black rounded-lg p-6 w-[200px] h-[120px] text-center flex flex-col justify-center shadow-xl border border-gray-700"
    >
      <h3 className="text-4xl font-bold text-white mb-1">{displayNumber}+</h3>
      <p className="text-white text-sm">{label}</p>
    </motion.div>
  );
}
