"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const philosophies = [
  {
    title: "Client-Centric Approach",
    description: "Everything we do starts and ends with our clients' success in mind.",
  },
  {
    title: "Innovation as Standard",
    description: "We constantly push boundaries and embrace new technologies.",
  },
  {
    title: "Quality Without Compromise",
    description: "Excellence is not an act, but a habit in everything we deliver.",
  },
  {
    title: "Collaborative Growth",
    description: "We grow together with our clients, partners, and team members.",
  },
];

export default function Philosophy() {
  return (
    <div className="min-h-screen py-16 bg-red-900">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">Our Philosophy</h1>
          <p className="text-white font-semibold max-w-2xl mx-auto">
            Guided by principles that define who we are and how we work
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full hover:border-red-600 transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <span className="text-2xl font-bold text-red-600">
                      {index + 1}
                    </span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-900 rounded-lg border border-gray-800"
        >
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Our Core Values
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-center">
            {["Integrity", "Excellence", "Innovation"].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-red-600 font-bold text-xl"
              >
                {value}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
