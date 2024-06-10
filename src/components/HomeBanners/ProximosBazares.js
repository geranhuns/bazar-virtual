"use client";
import Dropdown from "../Dropdown/Dropdown";
import BazarSmallView from "../SmallViews/BazarSmallView";
import Button from "../Button/button";
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

export default function ProximosBazares({ className }) {
  return (
    <div className={className}>
      {/* <div className="h-5/6 pb-16 ">
        <Image
          src="/temporaryImages/bazarpic.jpg"
          alt="bazar-pic"
          width={1080}
          height={1351}
        />
      </div> */}

      <div className="flex flex-col   top-0 left-0  w-full px-8 items-center rounded-xl  bg-orange-200 mt-2 ">
        {/* <div className="bg-yellow-300 mt-0">
          <Dropdown options={estadosDeMexico} />
        </div> */}
        <div className="flex items-center ">
          <h3 className="">Próximos Bazares</h3>
          <ul className=" flex w-full py-4 gap-10 ">
            <li>
              <BazarSmallView />
            </li>
            <li>
              <BazarSmallView />
            </li>
            <li>
              <BazarSmallView />
            </li>
          </ul>
          <Button
            text={"Ver todos"}
            href={"/bazares"}
            variant={"yellow"}
            className={" w-1/4"}
          />
        </div>
        {/* <div className="bg-yellow-bazar py-2 px-4 mt-10">
          <p>
            ¡<a href="/register">Registra</a> tu bazar e invítanos a comprar con
            tus marcas invitadas!
          </p>
        </div> */}
      </div>
    </div>
  );
}
