"use client";

import Logo from "../Logos/Logo";
import Menu from "./Menu";
import LogoH from "../Logos/LogoH";

function Header() {
  return (
    <>
      <nav className="bg-gray-800 fixed h-16  left-0 right-0 top-0 shadow-md">
        <div className="h-full flex justify-between items-center mx-auto   lg:max-w-7xl px-5">
          <LogoH />
          <input
            type="text"
            className="w-4/12 p-1 rounded-lg "
            placeholder="Buscar..."
          />
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
