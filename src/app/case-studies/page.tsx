'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: 'E-commerce Platform',
    client: 'RetailTech Inc',
    description:
      'Developed a scalable e-commerce platform handling millions of transactions annually. Implemented advanced features including real-time inventory management, AI-powered recommendations, and seamless payment integration.',
    image: '/case-study-1.jpg',
    results: ['50% increase in sales', '30% reduction in cart abandonment', '99.9% uptime'],
  },
  {
    title: 'Healthcare Management System',
    client: 'MedCare Solutions',
    description:
      'Built a comprehensive healthcare management system for streamlining patient care, appointment scheduling, and medical records management.',
    image: '/case-study-2.jpg',
    results: ['40% reduction in wait times', '95% patient satisfaction', 'HIPAA compliant'],
  },
  {
    title: 'Financial Trading Platform',
    client: 'Global Finance',
    description:
      'Created a high-performance trading platform with real-time market data integration, advanced analytics, and secure transaction processing.',
    image: '/case-study-3.jpg',
    results: ['Millisecond latency', '100% transaction accuracy', 'Bank-grade security'],
  },
];

export default function CaseStudies() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we've helped businesses achieve their digital transformation goals.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative w-full h-80 md:h-auto">
                    <Image
                      src={study.image}
                      alt={study.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle className="text-2xl">{study.title}</CardTitle>
                      <p className="text-primary font-medium">{study.client}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="mt-8 w-full md:w-auto">Read Full Case Study</Button>
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
