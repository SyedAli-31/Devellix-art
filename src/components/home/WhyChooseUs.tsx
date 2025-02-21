"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";

const features = [
  "Happy customers and 95% repeat business.",
  "Strong focus on quality assurance throughout the process.",
  "We have been in business since 2005.",
  "Over 350 staff.",
  "ISO 9001 and ISO 27001 certified company.",
  "Seamless communication and collaboration with clients.",
  "Software engineers who understand western work ethic.",
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 flex justify-center bg-black relative overflow-hidden px-6 md:px-10 lg:px-16">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10"
        />
      </div>

      <div className="container max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Heading & Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white md:text-left text-center">
              WHY CHOOSE US
            </h2>
            <div className="text-gray-400 space-y-4 text-lg text-center md:text-left">
              <p>
                Our teams of experts are the driving force behind all of our successes.
                Together, we believe that anything is possible and work relentlessly to meet
                or exceed our client's expectations while staying true to our core values.
              </p>
              <p>
                Orient Software is committed to hiring the most talented individuals in
                Information Technology and providing them with ongoing professional
                growth and career development opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-900/10 rounded-lg p-8 border border-gray-800"
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
