import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-[#1e1e1e] rounded-full shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-orangered font-bold text-xl">
                Kenneth
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a 
                  href="#home" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full transition duration-300"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full transition duration-300"
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full transition duration-300"
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-full transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#home" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-full"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-full"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-full"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-full"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;