import React from "react";

const Header = () => {
  return (
    <div className="px-5 flex justify-between bg-white">
      <div className="flex justify-center w-full sm:block sm:w-auto">
        <img src="/images/logopcielo.jpg" alt="logo" width={150} />
      </div>
      {window.outerWidth >= 768 && (
        <nav className="flex-1 ">
          <ul className="flex justify-center items-center h-full w-full">
            <li className="mr-12">
              <a href="/#conocenos" className="text-2xl">
                Conocenos
              </a>
            </li>
            <li className="mr-12">
              <a href="/#contactanos" className="text-2xl">
                Contactanos
              </a>
            </li>
            <li className="mr-12">
              <a href="/#menu" className="text-2xl">
                Menu
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
