import Button from "@/components/Button/button";
import Dropdown from "@/components/Dropdown/Dropdown";

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

console.log(estadosDeMexico);

export default function Home() {
  return (
    <main className="flex mt-28 justify-around">
      <div className="advertising-left ">
        <ul>
          <li>Shopping</li>
          <li>Productos Mexicanos</li>
          <li>Consume Local</li>
        </ul>
      </div>
      <div>
        <h3>Próximos Bazares</h3>
        <Dropdown options={estadosDeMexico} />
        <ul>
          <li>Morena Bazar - 10 jun</li>
          <li>Mil Cosas Bazar - 17 jun</li>
          <li>Bazar Manos Mexicanas - 24 jun</li>
        </ul>
      </div>
    </main>
  );
}
