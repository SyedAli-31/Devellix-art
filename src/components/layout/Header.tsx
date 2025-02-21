"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700  backdrop-blur supports-[backdrop-filter]:bg-opacity-80">
      <div className="container mx-auto px-4">
        {/* Top Contact Bar */}
        <div className="flex items-center justify-between h-8 border-b border-gray-700">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center text-black font-semibold gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@devillixart.com</span>
            </div>
            <div className="flex items-center ml-2 text-black font-semibold gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/DEVELLIX-LOGO.png"
              alt="Devellix Art"
              width={150}
              height={84}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sm font-medium transition-colors px-3 py-2 rounded-md",
                        pathname === item.href
                          ? "text-white bg-red-700"
                          : "text-black hover:text-white hover:bg-gray-800"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-700 md:hidden">
              <nav className="container py-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm rounded-md transition-colors",
                          pathname === item.href
                            ? "text-white bg-red-700"
                            : "text-gray-300 hover:text-white hover:bg-gray-800"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
