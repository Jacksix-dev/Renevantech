import React from 'react';

const logos = [
  { id: 1, src: 'https://via.placeholder.com/100x50?text=AMD', alt: 'AMD' },
  { id: 2, src: 'https://via.placeholder.com/100x50?text=Apple', alt: 'Apple' },
  { id: 3, src: 'https://via.placeholder.com/100x50?text=MSI', alt: 'MSI' },
  { id: 4, src: 'https://via.placeholder.com/100x50?text=HyperX', alt: 'HyperX' },
  { id: 5, src: 'https://via.placeholder.com/100x50?text=ASUS', alt: 'ASUS' },
  { id: 6, src: 'https://via.placeholder.com/100x50?text=NVIDIA', alt: 'NVIDIA' },
  { id: 7, src: 'https://via.placeholder.com/100x50?text=GeForce', alt: 'GeForce' },
  { id: 8, src: 'https://via.placeholder.com/100x50?text=Logitech', alt: 'Logitech' },
];

const Marcas = () => {
  return (
    <div className="overflow-hidden relative bg-blue-300 mb-10">
      <div className="flex animate-scroll">
        {logos.concat(logos).map((logo) => (
          <div key={logo.id} className="flex-shrink-0 mx-4">
            <img src={logo.src} alt={logo.alt} className="h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export {Marcas};