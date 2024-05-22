"use client";

import Button from "../Button/button";
import LogoH from "../Logos/LogoH";
import Dropdown from "../Dropdown/Dropdown";
import { useRouter } from "next/navigation";

const options = ["Todos", "Bazares", "Marcas", "Productos"];

function Header() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <nav className="bg-gray-800 fixed h-16  left-0 right-0 top-0 shadow-md">
        <div className="h-full flex justify-between items-center mx-auto   lg:max-w-7xl px-5">
          <LogoH />

          {pathname !== "/login" && pathname !== "/register" && (
            <div className="flex items-center  w-4/12 gap-0">
              <Dropdown options={options} />
              <input
                type="text"
                className=" w-full p-1 rounded-lg "
                placeholder="Buscar productos..."
              />
            </div>
          )}

          <Button text="Iniciar sesión" href="/login" variant="beige" />
        </div>
      </nav>
    </>
  );
}

export default Header;
