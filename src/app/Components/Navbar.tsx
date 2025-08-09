"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <header>
        <div className=" flex h-16 items-center justify-between px-4 md:px-6 lg:px-32">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt=" logo" width={110} height={60} />
          </Link>

          <nav className="hidden md:flex items-center space-x-3 lg:space-x-8">
            <Link
              href="#home"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#partner"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Partner With Us
            </Link>
          </nav>
          <Link href="#contact">
            <button className=" hidden md:flex bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md hover:cursor-pointer font-semibold">
              Contact
            </button>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="bg-white border-t border-gray-200 px-4 py-4 space-y-4">
            <Link
              href="#home"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#partner"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partner With Us
            </Link>
            <Link
              href="#contact"
              className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md hover:cursor-pointer font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
