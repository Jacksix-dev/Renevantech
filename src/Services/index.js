
import React from "react"



function Services() {
  return (
    <>
     <div className="flex flex-col ">
        <h1>Nuestros Servicios</h1>
        <p>Encontra aquello que mas te gusta</p>
     </div>
        <div className="w-100% grid grid-cols-3 space-x-10 container m-auto">
            <div className="w-100% h-96 bg-slate-300">
                <p>Yes</p>
            </div>

            <div className="w-100% h-96 bg-slate-400">
                <p>Yes</p>
            </div>

            <div className="w-100% h-96 bg-slate-500">
                <p>Yes</p>
            </div>
            
        </div>
    </>
    
  );
}

export { Services };