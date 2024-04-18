"use client";
import Dropdown from "../Dropdown/Dropdown";
import Image from "next/image";
const estadosDeMexico = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Coahuila",
  "Colima",
  "Ciudad de México",
  "Durango",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "México",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

export default function RegistraTuBazar() {
  return (
    <div className="relative flex justify-center ">
      <div className="h-5/6 pb-16 ">
        <Image
          src="/temporaryImages/bazarpic.jpg"
          alt="bazar-pic"
          width={1080}
          height={1351}
        />
      </div>

      <div className="flex flex-col pt-10 px-8 absolute top-0 left-0">
        <div className="self-center">
          <h3>Próximos Bazares</h3>
          <Dropdown options={estadosDeMexico} />
        </div>
        <ul className="pt-8">
          <li>Morena Bazar - 10 jun</li>
          <li>Mil Cosas Bazar - 17 jun</li>
          <li>Bazar Manos Mexicanas - 24 jun</li>
        </ul>
        <div className="bg-yellow-bazar py-2 px-6 mt-10">
          <p>
            ¡<a href="/register">Registra</a> tu bazar e invítanos a comprar con
            tus marcas invitadas!
          </p>
        </div>
      </div>
    </div>
  );
}