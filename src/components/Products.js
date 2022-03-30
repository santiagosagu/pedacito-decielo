import React from "react";
import ProductsDetails from "./ProductsDetails";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Plato Istmineño",
      imagen: "/images/plato-istmineño.jpg",
      ingredientes: [
        "Tela de plátano 100Grs",
        "carne desmechada 80Grs",
        "pollo 80Grs",
        "tocineta 40Grs",
        "mozzarella 40Grs",
      ],
    },
    {
      id: 2,
      name: "Plato Remolino",
      imagen: "/images/platoremolino.jpg",
      ingredientes: [
        "Pescado frito 500Grs",
        "patacón 100Grs",
        "limón 20Grs",
        "ensalada 80Grs",
      ],
    },
    {
      id: 3,
      name: "Plato Dipurdú",
      imagen: "/images/plato-dipurdú.jpg",
      ingredientes: [
        "Tela de plátano 50Grs",
        "pollo 40Grs",
        "tocineta 30Grs",
        "queso mozzarella 40Grs",
      ],
    },
    {
      id: 4,
      name: "Plato Chaquí",
      imagen: "/images/plato-chaquí.jpg",
      ingredientes: [
        "Tela de plátano 50Grs",
        "pollo 40Grs",
        "queso mozzarella 40Grs.",
      ],
    },
  ];

  return (
    <div className="mt-4 mb-12" id="menu">
      <h2 className="text-center text-5xl mb-8">Nuestros Productos</h2>
      <div className="sm:flex justify-center flex-wrap">
        {products.map((product) => (
          <ProductsDetails key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
