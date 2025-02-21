"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Graphic Design",
    image: "/graphic.jpeg",
    hoverText: `Striking Interfaces: Beautiful and functional.
User Delight: Smooth, enjoyable experiences.
Interactive Prototypes: Visualize and refine.`,
  },
  {
    title: "2D/3D Models & Animations",
    image: "/model.png",
    hoverText: `Captivating 2D Animation: Engaging characters and stories.
Immersive 3D Animation: Realistic visuals and environments.
Motion Graphics: Dynamic visuals to elevate your brand.`,
  },
  {
    title: "Website Development",
    image: "/website.png",
    hoverText: `Custom Creations: Stunning, unique websites.
Seamless Experience: Perfect on every device.
E-Commerce Magic: Powerful online stores.`,
  },
  {
    title: "Mobile Application Development",
    image: "/software.jpeg",
    hoverText: `Dynamic Apps: High-performance for iOS & Android.
Engaging Design: Intuitive, user-focused.
Universal Access: Consistent across all platforms.`,
  },
  {
    title: "Software Development",
    image: "/software.jpeg",
    hoverText: `Tailored Tech: Bespoke software solutions.
Smooth Integration: Works with what you have.
Continuous Support: Always up-to-date.`,
  },
  {
    title: "SEO",
    image: "/seo.webp",
    hoverText: `SEO Mastery: Climb search rankings.
Social Media Buzz: Engaging campaigns.
Targeted Ads: Maximize your ROI.`,
  },
];

const SecRecent = () => {
  const [videoHeight, setVideoHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const contentHeight = document.getElementById("content-wrapper")?.offsetHeight || 1000;
      setVideoHeight(`${contentHeight}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="relative w-full">
      {/* Video Background */}
      <video
        src="/videos/secrec.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full object-cover z-0"
        style={{ height: videoHeight }}
      />

      {/* Overlay to Darken Video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Content Wrapper */}
      <div id="content-wrapper" className="relative z-10">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-2">
              We Offer a Wide <br /> Variety of IT Services
            </h2>

            {/* Blue Line */}
            <div className="mx-auto w-[50px] lg:w-[150px] h-1 bg-blue-500 z-10" />

            {/* Red Line */}
            <div className="mx-auto w-[50px] md:w-[80px] h-1 bg-red-500 mt-2 z-10" />
          </div>

          {/* Services Grid */}
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.03]"
              >
                {/* Service Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  width={312}
                  height={312}
                  className="w-full h-[312px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Title (Always Visible) */}
                <div className="absolute top-4 left-4 bg-black/60 text-white text-sm md:text-lg font-bold px-3 py-1 rounded-md">
                  {service.title}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-black/70 transition-colors duration-500"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-line mb-4">
                    {service.hoverText}
                  </p>
                  <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecRecent;
