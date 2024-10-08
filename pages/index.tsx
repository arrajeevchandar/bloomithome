import Image from 'next/image';
import MyNavbar from '../components/MyNavbar';

const Home = () => {
  return (
    <>
      <MyNavbar />
      
      {/* Banner Section */}
      <header className="relative bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 text-black flex flex-col md:flex-row justify-between items-center h-[500px] p-8">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Welcome to <span className="text-yellow-800">Bloomit</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6">
            Your one-stop shop for beautiful decorations and flowers!
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            Shop Now
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center relative w-full h-[300px] mt-8 md:mt-0"> {/* Centering the image */}
          <Image
            src="/images/banner-image.jpg" // Ensure the path is correct
            alt="Flowers and Decorations"
            width={500} // Set a specific width for the image
            height={300} // Set a specific height for the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </header>

      {/* Featured Products Section */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-4xl font-bold mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Card Example */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <Image
                src={`/images/product-image-${index + 1}.jpg`} // Adjust based on your naming
                alt={`Product ${index + 1}`}
                fill // Use fill instead of layout
                className="object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">Product Title {index + 1}</h3>
              <p className="text-gray-600 mt-2">$19.99</p>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p className="text-lg">&copy; 2024 Bloomit. All rights reserved.</p>
        <p className="text-sm">Follow us on social media!</p>
      </footer>
    </>
  );
};

export default Home;
