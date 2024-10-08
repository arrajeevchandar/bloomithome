import Link from "next/link";

const MyNavbar = () => {
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
        <div className="md:hidden">
          <button className="text-white focus:outline-none hover:text-yellow-300">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
