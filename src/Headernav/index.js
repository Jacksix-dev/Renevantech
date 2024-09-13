import React from "react";

function HeaderNav({ hoverEnter, hoverExit }) {
  return (
    <>
      <nav className="bg-blue-200 shadow shadow-blue-300 w-full px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          {/* Logo */}
          <div className="text-blue-500 md:order-1">
            {/* Heroicon - Chip Outline */}
            <img src="/images/rtlogo.png" alt="Logo" />
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              {/* Active Link = text-indigo-500, Inactive Link = hover:text-indigo-500 */}
              <li className="md:px-4 text-lg md:py-2 text-blue-500">
                <a href="#">Inicio</a>
              </li>
              <li className="md:px-4 text-lg md:py-2 hover:text-blue-400">
                <a href="#">Ver Productos</a>
              </li>
              <li className="md:px-4 text-lg md:py-2 hover:text-blue-400">
                <a href="#">Servicios</a>
              </li>
              <li className="md:px-4 text-lg md:py-2 hover:text-blue-400">
                <a href="#">Sobre Nosotros</a>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <a
              href="https://web.whatsapp.com/send?phone=5491140708677"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-300 text-gray-50 rounded-xl flex items-center gap-2"
            >
              {/* Heroicons - Login Solid */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg" >Contactanos</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export { HeaderNav };