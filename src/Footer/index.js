
import React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';



function Footer() {
  return (
    <footer className="bg-blue-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Information and Contact Details */}
          <div className="w-full md:w-1/4 m mb-6 md:mb-0">
            <img src="/images/rtlogo.png"></img>
            <p className="text-gray-500 mb-4">
               <br />
             
            </p>
            
          </div>

          <div className="flex flex-col space-y-3 text-gray-800">
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 mr-2" />
                <span>+54 9 11 4070-8677</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2" />
                <span>revenantech1@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                <span>Tigre-Tigre Centro</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                <span>Vicente Lopez</span>
              </div>
            </div>
           
         
          
        </div>
      </div>
    </footer>
    
  );
}

export {Footer};