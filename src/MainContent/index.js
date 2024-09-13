import React from "react";

function MainContent() {
  return (
    <>
      <div
        className="font-semibold mb-10 flex min-h-[800px] justify-center h-16"
        style={{
          backgroundImage: "url('/images/pcbuild.jpg')", // Correct path to the image
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div className="grid grid-cols-1 rounded-lg w-5/6 h-full bg-opacity-75">
          <div className="justify-center flex flex-col p-10">
            <h1 className="mb-10 border-black font-bold text-white text-5xl">
              Encontra los mejores componentes para tu computadora
            </h1>
            <a
              href="https://web.whatsapp.com/send?phone=5491140708677"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-5 self-center w-72 h-16 text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-2xl text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { MainContent };