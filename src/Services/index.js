
import React from "react"
import { FaCode } from "react-icons/fa6";
import { PiDesktopTowerFill } from "react-icons/pi";
import { IoIosGitNetwork } from "react-icons/io";


import {FaMapMarkerAlt, FaTicketAlt, FaMoneyCheckAlt} from 'react-icons/fa';


function Services() {
  return (
    <div className="text-center py-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Integrales</h2>
    <p className="text-gray-500 mb-12 max-w-xl md:max-w-2xl mx-auto">
        Te asesoramos y te resolvemos todas tus dudas para que tengas tu computadora o estacion de trabajo. 
   </p>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      
      {/* Left Box */}
      <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-8 w-full md:w-1/4">
        <IoIosGitNetwork className="text-blue-500 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Servicios de redes</h3>
      </div>
      
      {/* Center Box */}
      <div className="bg-blue-500 text-white rounded-lg p-8 w-full md:w-1/2 relative">
        <PiDesktopTowerFill className="text-4xl mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Arma tu PC con nosotros</h3>
        <p className="text-md text-gray-200 mb-6">
        Te asesoramos y te resolvemos todas tus dudas para que tengas tu computadora o estacion de trabajo. 

        </p>
        <a href="#" className="text-white font-semibold underline">Contactanos</a>
        <div className="absolute top-1 right-1 bg-white rounded-full overflow-hidden">
         
        </div>
      </div>
      
      {/* Right Box */}
      <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-8 w-full md:w-1/4">
        <FaCode className="text-blue-500 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Software Personalizado para PYMES y servicios de gestion</h3>
      </div>
      
    </div>
  </div>
    
  );
}

export { Services };