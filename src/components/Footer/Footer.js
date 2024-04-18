import LogoTag from "../Logos/LogoTag";
export default function Footer() {
  return (
    <footer className="text-center w-full bg-gray-100 pb-10 pt-3 mt-auto">
      <div className="footer-content">
        <div className="footer-logo flex justify-center">
          <LogoTag width="100" />
        </div>

        <div className="footer-links px-6">
          <ul className="flex  flex-wrap justify-center gap-6 list-disc">
            <li>
              <a href="#">Acerca de nosotros</a>
            </li>
            <li>
              <a href="#">Nuestros bazares</a>
            </li>
            <li>
              <a href="#">Marcas asociadas</a>
            </li>
            <li>
              <a href="#">Contáctanos</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright pt-2">
        <p>Derechos de autor © 2024 Bazar Virtual - Consume Local</p>
      </div>
    </footer>
  );
}
