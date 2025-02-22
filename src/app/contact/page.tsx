"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

import Statistics from "@/components/home/Statistics";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit() {
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="relative py-16 bg-gradient-to-b from-black via-red-950 to-black flex justify-center text-white">
      {/* 🔥 Background Glow Effect */}
      <div className="absolute inset-0 bg-red-500/20 blur-[150px] pointer-events-none"></div>

      <div className="container relative z-10">
        {/* 🏆 Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-red-500 mb-4 tracking-wide">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Get in touch with us to discuss your project or learn more about our services.
          </p>
        </motion.div>

        {/* 📩 Contact Form + Info Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* 📄 Form Section with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border border-red-600 shadow-lg shadow-red-500/20 rounded-xl">
              <CardContent className="p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-black/30 border border-red-500 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-black/30 border border-red-500 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Your phone number"
                              className="bg-black/30 border border-red-500 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project"
                              className="min-h-[120px] bg-black/30 border border-red-500 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-bold py-3 rounded-lg shadow-md shadow-red-500/30 hover:shadow-red-500/40"
                    >
                      Send Message 🚀
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* 📞 Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="ml-[30px]">
              <h2 className="text-2xl font-bold text-red-500 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-white">
                      123 Tech Street<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className=" text-white">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-white">contact@devillixart.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[30px]">
              <h2 className="text-2xl font-bold text-red-500 mb-6">Office Hours</h2>
              <div className="space-y-2 text-white">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
        <br />
        <Statistics />
      </div>
    </div>
  );
}
