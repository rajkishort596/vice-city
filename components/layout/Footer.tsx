"use client";

import { motion } from "framer-motion";
import {
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Send,
  MapPin,
  Mail,
  Phone,
  Gamepad2,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://x.com/Rajkishort596",
      color: "hover:text-vice-cyan",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/web.with.raj",
      color: "hover:text-vice-pink",
    },
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@CodeWithRaj596",
      color: "hover:text-red-500",
    },
  ];

  const quickLinks = [
    { name: "Characters", href: "/characters" },
    { name: "Story", href: "/story" },
    { name: "City", href: "/city" },
    { name: "Vehicles", href: "/vehicles" },
    // { name: "Music", href: "/music" },
    { name: "Gallery", href: "/gallery" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative bg-black border-t-4 border-vice-pink overflow-hidden"
    >
      {/* Decorative Grid Background - Subtle */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top Gradient Line Glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vice-cyan via-vice-purple to-vice-pink shadow-[0_0_20px_rgba(255,0,204,0.5)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <h2 className="font-display text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-vice-cyan to-vice-pink drop-shadow-[0_0_10px_rgba(0,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,0,204,0.6)] transition-all duration-300">
                VICE CITY
              </h2>
            </Link>
            <p className="text-gray-400 font-sans leading-relaxed max-w-xs">
              Welcome to the city where dreams are made and sold. Sun, surf, and
              serious crime in the neon-soaked streets of the 80s.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-white p-3 rounded-lg backdrop-blur-sm border border-white/10 transition-colors duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-marker text-2xl text-vice-cyan tracking-widest drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
              EXPLORE
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-vice-pink transition-colors duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 bg-vice-purple rounded-full group-hover:bg-vice-cyan group-hover:shadow-[0_0_8px_#00ffff] transition-all duration-300" />
                    <span className="font-sans font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-marker text-2xl text-vice-purple tracking-widest drop-shadow-[0_0_5px_rgba(153,0,255,0.5)]">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-vice-pink shrink-0 mt-1" size={18} />
                <span>
                  Ocean Beach, Vice City
                  <br />
                  FL 33139
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="text-vice-cyan shrink-0" size={18} />
                <span>555-0100</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="text-vice-yellow shrink-0" size={18} />
                <span>tommy@vicecity.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Gamepad2 className="text-vice-purple shrink-0" size={18} />
                <span>Start Mission</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-marker text-2xl text-vice-pink tracking-widest drop-shadow-[0_0_5px_rgba(255,0,204,0.5)]">
              THE SCOOP
            </h3>
            <p className="text-gray-400 text-sm">
              Get the latest intel on turf wars and hidden packages.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-vice-cyan focus:ring-1 focus:ring-vice-cyan transition-all duration-300 placeholder:text-gray-600 font-sans"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-vice-cyan/10 hover:bg-vice-cyan text-vice-cyan hover:text-black p-2 rounded-md transition-all duration-300 group">
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
            <div className="flex gap-2 text-xs text-gray-500 font-mono mt-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-1"></span>
              Server Status: ONLINE
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-mono">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>© {currentYear} Vice City Reimagined. Fan Art Project.</p>
            <p className="text-xs flex items-center gap-1.5 group">
              Made with{" "}
              <Heart
                size={14}
                className="text-vice-pink fill-vice-pink animate-pulse"
              />{" "}
              by{" "}
              <Link
                href="https://github.com/rajkishort596"
                target="_blank"
                className="text-vice-cyan font-bold hover:text-white transition-colors"
              >
                Rajkishor Thakur
              </Link>
              <span className="text-gray-700 mx-1">|</span>
              <span className="italic text-gray-500 group-hover:text-vice-yellow transition-colors duration-500">
                To live in nostalgia
              </span>
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-vice-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-vice-pink transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-vice-purple/10 to-transparent pointer-events-none" />
    </footer>
  );
}
