"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Utility function for classNames

const animations = [
  {
    title: "2D and 3D Animation",
    description: "Engaging characters and stories that captivate audiences.",
    bgPattern:
      "radial-gradient(circle at 100% 100%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)",
  },
  {
    title: "Immersive 3D Animation",
    description: "Realistic visuals and environments that bring ideas to life.",
    bgPattern:
      "radial-gradient(circle at 0% 0%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)",
  },
  {
    title: "Motion Graphics",
    description: "Dynamic visuals to elevate your brand and message.",
    bgPattern:
      "radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-black via-red-900 to-black flex justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-600 rounded-full filter blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-600 rounded-full filter blur-[140px]" />
      </div>

      <div className="container relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-wide">
            What We Actually Do
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-red-400 font-semibold"
          >
            Experience. Execution. Excellence.
          </motion.p>
        </motion.div>

        {/* Animation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {animations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="group"
            >
              <Card
                className={cn(
                  "relative overflow-hidden border border-gray-800 bg-black/30 backdrop-blur-lg h-full transition-all duration-300",
                  "shadow-lg shadow-gray-900 hover:shadow-2xl hover:shadow-red-600/40 rounded-xl"
                )}
                style={{ backgroundImage: item.bgPattern }}
              >
                <CardContent className="p-8 relative z-10">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {item.description}
                  </p>
                </CardContent>
                {/* Glass Effect & Red Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-red-900/30 to-black/10 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
