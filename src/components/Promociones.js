import React from "react";

const Promociones = () => {
  return (
    <div className="mb-20">
      <h2 className="text-center text-5xl mb-8 mt-8">Promociones</h2>
      <div className="w-full sm:flex justify-center">
        <div
          className="sm:w-1/3 sm:h-40 flex items-center h-40 mx-2 px-3 text-center mb-7 justify-center"
          style={{ backgroundColor: "#fed5c9", borderRadius: "10px" }}
        >
          <h3 className="text-lg sm:text-xl sm:font-bold ">
            Por compra superiores a $50.000, obten el 10% en el segundo plato.
          </h3>
        </div>
        <div
          className="sm:w-1/3 sm:h-40 flex items-center h-40 mx-2 px-3 text-center justify-center"
          style={{ backgroundColor: "#bedfff", borderRadius: "10px" }}
        >
          <h3 className="text-lg sm:font-bold sm:text-xl">
            Disfruta de los ricos combos; pagas uno, llevas dos.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
