import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column: Logo & Social Media */}
          <div>
            <div>
              <img
                src="/DEVELLIX-LOGO.png" // Replace with your logo path
                alt="Devellix Art"
                width={150}
                height={84}
              />
            </div>
            <p className="text-gray-400 mt-4">Find us on social media</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Second Column: Services */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/web-development">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/on-demand-apps">
                  On-Demand Apps
                </Link>
              </li>
              <li>
                <Link href="/services/dedicated-team">
                  Dedicated Team
                </Link>
              </li>
              <li>
                <Link href="/services/ios-android">
                  iOS & Android
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column: Company */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about">About Company</Link>
              </li>
              <li>
                <Link href="/customers">For Customers</Link>
              </li>
              <li>
                <Link href="/blog-news">Blog & News</Link>
              </li>
              <li>
                <Link href="/careers-reviews">Careers & Reviews</Link>
              </li>
              <li>
                <Link href="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column: Learn */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/learn/social-media-platform">
                  Social Media Platform
                </Link>
              </li>
              <li>
                <Link href="/learn/business-management-tools">
                  Business Management Tools
                </Link>
              </li>
              <li>
                <Link href="/learn/gambling-betting-web-apps">
                  Gambling & Betting Web Apps
                </Link>
              </li>
              <li>
                <Link href="/learn/sports-fitness-app">
                  Sports and Fitness App
                </Link>
              </li>
              <li>
                <Link href="/learn/saas">
                  Software as a Service (SaaS)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2021 Devellix Art. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
