"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Custom Software Development",
    description:
      "End-to-end custom software development services tailored to your specific business needs and requirements.",
    features: [
      "Requirements Analysis",
      "Custom Solutions",
      "Quality Assurance",
      "Maintenance & Support",
    ],
    image: "/service-1.jpg",
  },
  {
    title: "Web Development",
    description:
      "Modern and responsive web applications built with the latest technologies and best practices.",
    features: [
      "Frontend Development",
      "Backend Development",
      "PWA Development",
      "Web Optimization",
    ],
    image: "/service-2.jpg",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "Mobile UI/UX",
    ],
    image: "/service-3.jpg",
  },
];

export default function Services() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Red Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black  to-red-900   pointer-events-none"></div>

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-white max-w-2xl mx-auto">
            We offer comprehensive software development services to help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg bg-white border border-gray-200 transition-all duration-300 hover:shadow-red-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Text Section */}
                  <div className="order-2 md:order-1 p-6 flex flex-col justify-center">
                    <CardHeader>
                      <CardTitle className="text-2xl text-black">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>

                  {/* Image Section */}
                  <div className="order-1 md:order-2 relative w-full h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg md:rounded-r-lg md:rounded-t-none"
                    />
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
