"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Target, Code, Users } from "lucide-react";

const strategies = [
  {
    icon: Lightbulb,
    title: "Discovery",
    steps: [
      "Understanding client needs",
      "Market research",
      "Technology assessment",
      "Opportunity identification",
    ],
  },
  {
    icon: Target,
    title: "Planning",
    steps: [
      "Solution architecture",
      "Resource allocation",
      "Timeline development",
      "Risk assessment",
    ],
  },
  {
    icon: Code,
    title: "Execution",
    steps: [
      "Agile development",
      "Quality assurance",
      "Regular client updates",
      "Continuous integration",
    ],
  },
  {
    icon: Users,
    title: "Optimization",
    steps: [
      "Performance monitoring",
      "User feedback integration",
      "Continuous improvement",
      "Scale optimization",
    ],
  },
];

export default function Strategy() {
  return (
    <div className="min-h-screen bg-red-900 py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white">We Maximize Added Value for Our Clients</h1>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gray-900 border border-gray-800 hover:border-red-600 transition-all duration-300 p-6 rounded-lg shadow-lg text-center">
                <div className="relative mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                    <strategy.icon className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold text-white mb-4">{strategy.title}</h3>
                  <div className="space-y-2 text-gray-400 text-sm">
                    {strategy.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center justify-center gap-2">
                        <ArrowRight className="w-4 h-4 text-red-600" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}
