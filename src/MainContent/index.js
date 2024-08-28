
import React from "react";

function MainContent() {
  return (
    <>
      <div className="font-semibold	 mb-10 flex min-h-[800px] justify-center mt-5  h-16 ">
        <div className="grid grid-cols-2	 rounded-lg  w-5/6 h-full bg-blue-200">
          <div className="justify-center flex flex-col ">
            
            <h1 className="text-xl">Best pc ever </h1>
            <button
              type="button"
              className="mt-5 self-center w-72 h-16 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-2xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Contactanos
            </button>
          </div>

         <img src="/images/mainpc.png" alt="asd"></img>

        </div>


      </div>
      <div className=" flex  justify-center space-x-16 bg-blue-100 w-100% h-32">
          <div className="flex rounded-lg w-100% h-100% bg-blue-100">
          <p className=" m-auto font-bold text-2xl">Nuestras Marcas </p>
          </div>
          <div className=" flex space-x-10 w-100% h-100% bg-blue-200">
            <img className="" src="/images/asus_icon.png"alt="icon"></img>
            <img  className="" src="/images/asus_icon.png"alt="icon"></img>
            <img className="" src="/images/asus_icon.png"alt="icon"></img>
            <img className="" src="/images/asus_icon.png"alt="icon"></img>
            </div>
      </div>


    
    
    </>
    
  );
}

export { MainContent };