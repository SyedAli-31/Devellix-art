"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 1500, label: "Projects Done" },
  { number: 2000, label: "Happy Customers" },
  { number: 28, label: "Experienced Staff" },
  { number: 15, label: "Countries Worldwide" },
];

const sections = [
  {
    title: "Our Vision",
    content:
      "To be the leading software development partner for businesses worldwide, driving digital innovation and success.",
  },
  {
    title: "Our Mission",
    content:
      "To deliver exceptional software solutions that empower businesses to achieve their full potential in the digital age.",
  },
  {
    title: "Our Values",
    content:
      "Excellence, Innovation, Integrity, and Client Success guide everything we do.",
  },
];

export default function About() {
  return (
    <div className="py-24 bg-gradient-to-b from-black via-red-950 to-black flex justify-center">
      <div className="container max-w-6xl px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">About Devillixart</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are a leading software development company with over 10 years of experience in delivering innovative solutions to businesses worldwide.
          </p>
        </motion.div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-80"
          >
            <Image
              src="/about-us.jpg" // Use Next.js public folder for optimized images
              alt="Our team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
              priority
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-400 mb-6">
              Founded in 2010, Devillixart has grown from a small team of developers to a full-service software development company.  We&apos;ve helped hundreds of businesses transform their digital presence.
            </p>
            <p className="text-gray-400">
              Our mission is to deliver exceptional software solutions that drive business growth and innovation.
            </p>
          </motion.div>
        </div>

        {/* Stats Section with Animated Counting */}
        <StatsSection />

        {/* Vision, Mission, Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative text-center p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-red-700 text-white border border-gray-700 group overflow-hidden"
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black to-red-600 opacity-25 blur-xl group-hover:opacity-50 transition duration-500"></div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition duration-300">
                {section.title}
              </h3>
              <p className="text-white font-bold group-hover:text-white transition duration-300">
                {section.content}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Stats Section with Animated Count */
function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
      {stats.map((stat, index) => (
        <StatCard key={index} number={stat.number} label={stat.label} />
      ))}
    </div>
  );
}

/* Individual Stat Card with Counting Animation */
function StatCard({ number, label }: { number: number; label: string }) {
  const count = useMotionValue(0);
  
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const controls = animate(count, number, {
      duration: 3,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayNumber(Math.floor(latest)), // Fix for ReactNode error
    });

    return () => controls.stop();
  }, [count, number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-4xl font-bold text-red-500 mb-2">
        {displayNumber}+
      </h3>
      <p className="text-white">{label}</p>
    </motion.div>
  );
}
