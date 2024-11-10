"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        
        <div className="text-lg font-bold">
          <Link href="/">My Portfolio</Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm">
          <li>
            <Link href="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">About</Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-blue-400">Skills</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-400">Services</Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-400">
            ☰
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-center space-y-4 bg-gray-800 py-4 md:hidden">
          <li>
            <Link href="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">About</Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-blue-400">Skills</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-400">Services</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
