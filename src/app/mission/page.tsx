"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const missionItems = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge technology",
  },
  {
    title: "Client Success",
    description: "Delivering solutions that drive business growth",
  },
  {
    title: "Quality Excellence",
    description: "Maintaining highest standards in every project",
  },
  {
    title: "Global Impact",
    description: "Creating solutions with worldwide reach",
  },
  {
    title: "Sustainable Growth",
    description: "Building long-term success for our clients",
  },
  {
    title: "Continuous Learning",
    description: "Staying ahead with emerging technologies",
  },
];

export default function Mission() {
  return (
    <div className="min-h-screen py-16 flex justify-center bg-red-950">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">Our Mission</h1>
          <p className="text-white max-w-2xl mx-auto">
            Empowering businesses through innovative digital solutions
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {missionItems.map((item, index) => (
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
