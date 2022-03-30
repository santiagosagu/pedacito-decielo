import React from "react";

const Ubicacion = () => {
  return (
    <div
      style={{ backgroundColor: "#f2f2f5" }}
      className="py-6 mb-20 "
      id="contactanos"
    >
      <h2 className="text-center text-5xl mb-8 mt-8">Visitanos</h2>
      <div className="flex justify-center ">
        <div className="px-2 text-center">
          <h3 className="text-lg sm:text-xl">
            Estamos ubicados en el barrio la Aurora, Medellín. Calle 63AE #
            117F-107, Local 107.
          </h3>
          <h3 className="text-xl sm:text-xl mt-8 font-bold">
            Servicio a domicilio:
          </h3>
          <h3 className="text-lg sm:text-xl">3107599550 - 5377490</h3>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
