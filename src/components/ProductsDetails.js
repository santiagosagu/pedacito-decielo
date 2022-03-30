import React from "react";

const ProductsDetails = ({ data }) => {
  return (
    <div className="bg-white flex flex-col justify-center mx-12 sm:mx-4 p-4 rounded-lg mb-8 sm:w-72">
      <h2 className="text-4xl text-center mb-4">{data.name}</h2>
      <div className="flex justify-center rounded-lg">
        <img src={data.imagen} alt="platano-isleño" className="w-full" />
      </div>
      <div>
        <h3 className="text-3xl mt-1">Ingredientes</h3>
        <ul>
          {data.ingredientes.map((ingrediente) => (
            <li key={ingrediente} className="text-left mt-4 text-lg capitalize">
              {ingrediente}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsDetails;
