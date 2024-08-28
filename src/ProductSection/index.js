
import React, { useRef } from 'react';

const cards = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 4',
      description: 'This is the fourth card.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

function ProductSection() {
  return (
    <>
     <div className="flex flex-col ">
        <h1>Nuestros Productos</h1>
        <p>Encontra aquello que mas te gusta</p>
     </div>

     <div className="w-full overflow-x-scroll whitespace-nowrap">
      {cards.map((card, index) => (
        <div
          key={index}
          className="inline-block w-64 mx-2 bg-white rounded-lg shadow-md"
        >
          <img
            className="w-full h-32 object-cover rounded-t-lg"
            src={card.imageUrl}
            alt={card.title}
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    
    </>
    
  );
}

export { ProductSection };