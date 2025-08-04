import React, { useEffect, useState } from "react";

export default function Home({ theme }) {
  // State to store product data fetched from API
  const [products, setProducts] = useState([]);

  // useEffect runs once when the component mounts to fetch product data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Fetch data from fake store API
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => setProducts(data)); // Store data in state
  }, []);

  return (
    // Main container with dynamic padding and text color based on theme
    <div className={`px-4 ${theme === 'theme2' ? 'text-white pt-10' : 'pt-48 md:pt-24'}`}>

      {/* Page title */}
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      {/* Description text */}
      <p className="mb-4">This is the home page.</p>

      {/* Sample button with alert on click */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => alert('This is a Button!')}
      >
        Click Me
      </button>

      {/* Product grid: shows 4 products, with responsive layout and theme-aware text color */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pb-6 ${theme === 'theme2' && 'text-black'}`}>
        {products.slice(0, 4).map((product) => (
          // Individual product card
          <div
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow"
            key={product.id}
          >
            {/* Product title */}
            <h3 className="font-semibold text-lg mb-2 h-12 md:h-20">{product.title}</h3>

            {/* Product image */}
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-2"
            />

            {/* Product price */}
            <p className="text-blue-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
