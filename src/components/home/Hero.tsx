'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-[85vh] flex items-center px-6 sm:px-12 lg:px-24">
      {/* Video Background */}
      <video
        src="/videos/furistic.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              <span className="block">Welcome to</span>
              <span className="block text-red-700">Devillixart</span>
            </h1>
            <p className="text-lg sm:text-2xl text-white/80 font-semibold mt-4 mb-8">
              Experience. Execution. Excellence.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-xl text-white font-bold mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Creating innovative digital experiences through cutting-edge technology and creative excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="text-lg text-white font-bold px-6 sm:px-8 py-2 sm:py-6 h-5 hover:bg-white/80  bg-red-600/80 border-3  border-black flex items-center gap-2 rounded-lg "
            >
              Get Started
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="text-lg px-6 sm:px-8 py-4 h-5 font-bold flex items-center sm:py-6 text-white border bg-black border-white hover:bg-white/50 rounded-md transition-all"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
