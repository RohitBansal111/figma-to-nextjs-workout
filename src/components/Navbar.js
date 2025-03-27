'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'PROGRAMS', href: '/programs' },
    { name: 'HEALTHY LIVING', href: '/healthy-living' },
    { name: 'COMMUNITY', href: '/community' },
    { name: 'ABOUT', href: '/about' },
    { name: 'STORE', href: '/store' },
  ];

  return (
    <nav className="bg-black text-white py-5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-wider">
          WORKOUT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm hover:text-orange-400 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-3 px-4 space-y-3 absolute w-full left-0 bg-black z-50">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="block py-2 text-base hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
