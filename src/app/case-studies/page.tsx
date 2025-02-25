"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "E-commerce Platform",
    client: "RetailTech Inc",
    description:
      "Developed a scalable e-commerce platform handling millions of transactions annually. Implemented advanced features including real-time inventory management, AI-powered recommendations, and seamless payment integration.",
    image: "/case-study-1.jpg",
    results: ["50% increase in sales", "30% reduction in cart abandonment", "99.9% uptime"],
  },
  {
    title: "Healthcare Management System",
    client: "MedCare Solutions",
    description:
      "Built a comprehensive healthcare management system for streamlining patient care, appointment scheduling, and medical records management.",
    image: "/case-study-2.jpg",
    results: ["40% reduction in wait times", "95% patient satisfaction", "HIPAA compliant"],
  },
  {
    title: "Financial Trading Platform",
    client: "Global Finance",
    description:
      "Created a high-performance trading platform with real-time market data integration, advanced analytics, and secure transaction processing.",
    image: "/case-study-3.jpg",
    results: ["Millisecond latency", "100% transaction accuracy", "Bank-grade security"],
  },
];

export default function CaseStudies() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-red-900 relative">
      {/* 🔥 Background Glow Effect */}
      <div className="absolute inset-0 bg-red-500/20 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto relative">
        {/* 🏆 Header with Fade-in Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">Case Studies</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore how We&apos;ve helped businesses achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* 📖 Case Studies List */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg border border-gray-700 bg-white/10 backdrop-blur-lg transition-all duration-300 hover:shadow-red-500/40 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 📷 Image Section (Fixed Full Height for Desktop) */}
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-full h-64 md:h-auto overflow-hidden group"
                  >
                    <Image
                      src={study.image}
                      alt={study.title}
                      layout="responsive"
                      width={600}
                      height={400}
                      objectFit="cover"
                      className="rounded-t-lg md:rounded-l-lg md:rounded-t-none transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>

                  {/* ✏️ Text Section with Glassmorphism */}
                  <div className="p-6 flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">{study.title}</CardTitle>
                      <p className="text-red-400 font-medium">{study.client}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-200 mb-6">{study.description}</p>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-white">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2 text-white">
                              <span className="w-2 h-2 bg-red-500 rounded-full" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="mt-8 w-full md:w-auto bg-red-600 hover:bg-red-700 transition-all duration-300">
                        Read Full Case Study
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
