"use client";

import LogoH from "../Logos/LogoH";
import DropdownSearchFilter from "./DropdownSearchFilter";

function Header() {
  return (
    <>
      <nav className="bg-gray-800 fixed h-16  left-0 right-0 top-0 shadow-md">
        <div className="h-full flex justify-between items-center mx-auto   lg:max-w-7xl px-5">
          <LogoH />
          <div className="flex items-center  w-4/12 gap-0">
            <DropdownSearchFilter />
            <input
              type="text"
              className=" w-full p-1 rounded-lg "
              placeholder="Buscar..."
            />
          </div>
          <button
            href="/login"
            className="mr-4 bg-white p-1 rounded-lg text-lg text-gray-800 font-medium"
          >
            <a href="/login">Iniciar sesion</a>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
