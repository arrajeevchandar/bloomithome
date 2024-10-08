import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi'; // Ensure you have react-icons installed



const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl transition duration-300 ease-in-out hover:text-yellow-300">
          <Link href="/">Bloomit</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition duration-300">
            About
          </Link>
          <Link href="/categories" className="text-white hover:text-yellow-300 transition duration-300">
            Categories
          </Link>
          <Link href="/sign-in" className="text-white hover:text-yellow-300 transition duration-300">
            Sign In
          </Link>
        </div>
        
          {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-yellow-600 p-4 md:hidden">
          <Link href="/" className="block text-white hover:text-yellow-200 mb-2">
            Home
          </Link>
          <Link href="/products" className="block text-white hover:text-yellow-200 mb-2">
            Products
          </Link>
          <Link href="/about" className="block text-white hover:text-yellow-200 mb-2">
            About
          </Link>
          <Link href="/contact" className="block text-white hover:text-yellow-200 mb-2">
            Contact
          </Link>
        </div>
      )}
      </div>
    </nav>
  );
};

export default MyNavbar;
