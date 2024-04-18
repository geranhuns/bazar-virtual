import LogoTag from "../Logos/LogoTag";
export default function Footer() {
  return (
    <footer className="text-center absolute bottom-0 w-full bg-gray-100">
      <div className="footer-content">
        <div className="footer-logo flex justify-center">
          <LogoTag width="100" />
        </div>

        <div className="footer-links">
          <ul className="flex justify-center gap-7 list-disc">
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
      <div className="footer-copyright">
        <p>Derechos de autor © 2024 Bazar Virtual - Consume Local</p>
      </div>
    </footer>
  );
}
