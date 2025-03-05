"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Truck, Phone } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center p-4 bg-white">
      {/* Left: Logo */}
      <div className="flex items-center gap-1">
        <Link href="/">
          <Truck size={50} />
        </Link>
        <h1 className="text-xl font-bold">RouteLane</h1>
      </div>

      {/* Center: Desktop Nav Links */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6 items-center">
          <li className="flex items-center space-x-1">
            <Home size={16} />
            <Link href="/" className="hover:text-green-500 transition">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <User size={16} />
            <Link href="/about" className="hover:text-green-500 transition">
              About
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <Briefcase size={16} />
            <Link href="/services" className="hover:text-green-500 transition">
              Services
            </Link>
          </li>
          <li className="flex items-center space-x-1">
            <Mail size={16} />
            <Link href="/contact" className="hover:text-green-500 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right: Desktop Email and Phone */}
      <div className="hidden md:flex items-center space-x-2 text-sm text-black">
        <Mail size={16} />
        <a
          href="mailto:routelanellc@gmail.com"
          className="hover:text-green-500 cursor-pointer"
        >
          EMAIL
        </a>
        <Phone size={16} />
        <a
          href="tel:+18282036854"
          className="hover:text-green-500 cursor-pointer"
        >
          +1 (828) 203-6854
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <nav>
            <ul className="flex flex-col items-center space-y-4 p-4">
              <li className="flex items-center space-x-1">
                <Home size={16} />
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-green-500 transition"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <User size={16} />
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-green-500 transition"
                >
                  About
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <Briefcase size={16} />
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-green-500 transition"
                >
                  Services
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <Mail size={16} />
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-green-500 transition"
                >
                  Contact
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <Mail size={16} />
                <a
                  href="mailto:routelanellc@gmail.com"
                  className="text-sm text-black hover:text-green-500 cursor-pointer"
                >
                  EMAIL
                </a>
              </li>
              <li className="flex items-center space-x-1">
                <Phone size={16} />
                <a
                  href="tel:+18282036854"
                  className="text-sm text-black hover:text-green-500 cursor-pointer"
                >
                  +1 (828) 203-6854
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
