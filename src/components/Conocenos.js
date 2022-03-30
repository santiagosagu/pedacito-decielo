import React from "react";

const Conocenos = () => {
  return (
    <div
      className="w-full flex justify-center mt-0"
      style={{ backgroundColor: "#eaddd7" }}
      id="conocenos"
    >
      <div className="sm:flex items-center mb-8 pt-8 sm:p-0">
        <div>
          <h3 className="text-2xl mb-8 text-center sm:text-start">
            Somos el primer punto de venta enfocado en conservar la sazón y
            tradición chocoana.
          </h3>
          <h3 className="text-2xl mb-12 text-center sm:text-start">
            Nos destacamos por ser un lugar para disfrutar con amigos y
            familiares.
          </h3>
          <h3 className="text-5xl text-center mt-11">Te esperamos!</h3>
        </div>
        <div className="w-full">
          <img
            src="/images/mujer-morena.jpg"
            alt="iamgen-mujer-morena"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
