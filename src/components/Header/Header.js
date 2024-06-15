"use client";

import Button from "../Button/button";
import LogoH from "../Logos/LogoH";
import Dropdown from "../Dropdown/Dropdown";
import { useRouter } from "next/navigation";

const options = [
  "Todo",
  "Alimentos y Bebidas",
  "Auto",
  "Bebé",
  "Belleza",
  "Deportes y Aire Libre",
  "Electrónicos",
  "Hecho a mano",
  "Herramientas y Mejoras del Hogar",
  "Hogar y Cocina",
  "Industria y Ciencia",
  "Instrumentos Musicales",
  "Jardín",
  "Juegos y juguetes",
  "Libros",
  "Mascotas",
  "Música",
  "Oficina y Papelería",
  "Otros productos",
  "Películas y Series de TV",
  "Ropa, Zapatos y Accesorios",
  "Salud y Cuidado Personal",
  "Software",
  "Videojuegos",
];

function Header() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <nav className="bg-raw-sienna-500 sticky h-16  left-0 right-0 top-0 shadow-md">
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
          <div className="flex gap-4">
            <Button text="Iniciar sesión" href="/login" variant="transparent" />
            <Button text="Crear cuenta" href="/register" variant="yellow" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
