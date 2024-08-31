import React from 'react';
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdBuildCircle } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";


const Description = () => {
    return (
      <div className="text-center my-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Conoce como es nuestro proceso de compra</h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Te escuchamos, te hacemos una propuesta y si te gusta la recibis en la puerta de tu casa.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
             <RiMoneyDollarCircleFill className="text-blue-500 text-6xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Presupuestamos</h3>
            <p className="text-gray-500">
              Decinos que tenes en mente ya sea un servicio o armado y nosotros te lo cotizamos mejorando cualquier presupuesto.
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
            <MdBuildCircle className="text-blue-500 text-6xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Armamos tu pedido</h3>
            <p className="text-gray-500">
                Armamos tu computadora o simplemente despachamos tus componentes. 
           </p>
          </div>
  
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
            <MdDeliveryDining  className="text-blue-500 text-6xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Entregamos</h3>
            <p className="text-gray-500">
              Recibi tu pedido en la puerta de tu casa o negocio. 
            </p>
          </div>
        </div>
      </div>
    );
  };

export {Description};