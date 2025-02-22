"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "E-commerce Platform",
    client: "RetailTech Inc",
    description: "Built a scalable e-commerce solution handling millions of transactions.",
    image: "/case-study-1.jpg", // Replace with actual Next.js public assets
  },
  {
    title: "Healthcare App",
    client: "MedCare Solutions",
    description: "Developed a patient management system for healthcare providers.",
    image: "/case-study-2.jpg",
  },
  {
    title: "FinTech Solution",
    client: "Global Finance",
    description: "Created a secure financial transaction processing system.",
    image: "/case-study-3.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-black flex justify-center">
      <div className="container max-w-6xl px-6">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Discover how We&apos;ve helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-gray-900 border border-gray-800 rounded-xl shadow-lg">
                {/* Optimized Image */}
                <div className="w-full h-48 relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    priority
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">{study.title}</CardTitle>
                  <p className="text-sm text-red-500">{study.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{study.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
