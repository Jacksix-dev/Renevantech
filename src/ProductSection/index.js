import React, { useState, useEffect } from 'react';

const ProductSection = () => {
  const items = [
    { id: 1, title: 'Pc AMD Ryzen 5 4600G 16Gb SSD...', price: '$1', image: 'https://via.placeholder.com/200'},
    { id: 2, title: 'Pc AMD Ryzen 5 5600G 8Gb SSD...', price: '$2', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$3', image: 'https://via.placeholder.com/200' },
    { id: 4, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$4', image: 'https://via.placeholder.com/200' },
    { id: 5, title: 'Pc AMD Ryzen 5 4600G 16Gb SSD...', price: '$5', image: 'https://via.placeholder.com/200'},
    { id: 6, title: 'Pc AMD Ryzen 5 5600G 8Gb SSD...', price: '$6', image: 'https://via.placeholder.com/200' },
    { id: 7, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$7', image: 'https://via.placeholder.com/200' },
    { id: 1, title: 'Pc AMD Ryzen 5 4600G 16Gb SSD...', price: '$1', image: 'https://via.placeholder.com/200'},
    { id: 2, title: 'Pc AMD Ryzen 5 5600G 8Gb SSD...', price: '$2', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$3', image: 'https://via.placeholder.com/200' },
    { id: 4, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$4', image: 'https://via.placeholder.com/200' },
    { id: 5, title: 'Pc AMD Ryzen 5 4600G 16Gb SSD...', price: '$5', image: 'https://via.placeholder.com/200'},
    { id: 6, title: 'Pc AMD Ryzen 5 5600G 8Gb SSD...', price: '$6', image: 'https://via.placeholder.com/200' },
    { id: 7, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$7', image: 'https://via.placeholder.com/200' },
    { id: 1, title: 'Pc AMD Ryzen 5 4600G 16Gb SSD...', price: '$1', image: 'https://via.placeholder.com/200'},
    { id: 2, title: 'Pc AMD Ryzen 5 5600G 8Gb SSD...', price: '$2', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$3', image: 'https://via.placeholder.com/200' },
    { id: 4, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$4', image: 'https://via.placeholder.com/200' },
    { id: 5, title: 'Pc AMD Ryzen 5 4600G 16Gb SSD...', price: '$5', image: 'https://via.placeholder.com/200'},
    { id: 6, title: 'Pc AMD Ryzen 5 5600G 8Gb SSD...', price: '$6', image: 'https://via.placeholder.com/200' },
    { id: 7, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$7', image: 'https://via.placeholder.com/200' },
    { id: 1, title: 'Pc AMD Ryzen 5 4600G 16Gb SSD...', price: '$1', image: 'https://via.placeholder.com/200'},
    { id: 2, title: 'Pc AMD Ryzen 5 5600G 8Gb SSD...', price: '$2', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$3', image: 'https://via.placeholder.com/200' },
    { id: 4, title: 'Pc AMD Ryzen 7 5700G 8Gb SSD...', price: '$4', image: 'https://via.placeholder.com/200' },
    { id: 5, title: 'Pc AMD Ryzen 5 4600G 16Gb SSD...', price: '$5', image: 'https://via.placeholder.com/200'},
    { id: 6, title: 'Pc AMD Ryzen 5 5600G 8Gb SSD...', price: '$6', image: 'https://via.placeholder.com/200' },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through the carousel items every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  const visibleItems = items.slice(currentIndex, currentIndex + 4);

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}>
        {items.map((item) => (
          <div key={item.id} className="w-1/4 flex-shrink-0 p-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)}>
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)}>
        &#10095;
      </button>
    </div>
  );
};

export { ProductSection };