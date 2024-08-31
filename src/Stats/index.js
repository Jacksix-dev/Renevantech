import React from 'react';

const Stats  = () => {
    return (
      <div className="flex flex-col md:flex-row justify-around items-center bg-gray-100 p-8 rounded-lg space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
          <span className="text-blue-500 text-5xl font-bold">5+</span>
          <span className="text-gray-500 text-lg">Años de Experiencia</span>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
          <span className="text-blue-500 text-5xl font-bold">1000+</span>
          <span className="text-gray-500 text-lg">Servicios Terminados</span>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
          <span className="text-blue-500 text-5xl font-bold">100+</span>
          <span className="text-gray-500 text-lg">Computadoras entregadas</span>
        </div>
      </div>
    );
  };

export{Stats};