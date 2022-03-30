import React from "react";

const RedesSociales = () => {
  return (
    <div className="flex justify-center mb-16">
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.facebook.com/Pedacitodecielo2021c-262529705614301"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/facebook.svg"
              className="w-16"
              alt="icono-facebook"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/PPedacito/status/1440708263054483458"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/twitter.svg"
              className="w-16"
              alt="icono-twitter"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.whatsapp.com/catalog/573006440526/?app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/whatsapp.svg"
              className="w-16"
              alt="icono-whatsapp"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/pedacitodecielo014_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram.svg"
              className="w-16"
              alt="icono-instagram"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RedesSociales;
