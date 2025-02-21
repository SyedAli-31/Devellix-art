"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    content:
      "Devillixart transformed our vision into reality. Their expertise in 3D animation and development is unmatched.",
    company: "TechCorp Solutions",
  },
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    content:
      "The team's creativity and technical skills brought our brand to life. Highly recommended for any creative project.",
    company: "Creative Studios",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content:
      "Outstanding service and exceptional quality. They delivered beyond our expectations.",
    company: "Innovation Labs",
  },
  {
    name: "Emma Williams",
    role: "Marketing Director",
    content:
      "The animations they created for our campaign were simply breathtaking. A game-changer for our brand.",
    company: "Global Marketing",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, slidesToScroll: 1 });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 flex justify-center relative bg-gradient-to-b from-black via-red-900 to-black">
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">We are Trusted</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Hear what our clients from 15+ countries worldwide have to say</p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] min-w-0">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                    <Card className="h-full bg-black border border-red-600 rounded-xl shadow-lg">
                      <CardContent className="p-6">
                        <Quote className="w-10 h-10 text-red-500 mb-4" />
                        <p className="text-gray-300 mb-6">{testimonial.content}</p>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-gray-400">{testimonial.role}</p>
                          <p className="text-red-500 text-sm">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="text-black border-red-600 hover:bg-red-800">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="text-black border-red-600 hover:bg-red-800">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
