export default function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <img src="ruta_a_tu_logo.png" alt="Logo de tu marca" />
        </div>
        <div class="footer-contact-info">
          <p>Dirección: [Dirección de tu empresa]</p>
          <p>Teléfono: [Número de teléfono]</p>
          <p>
            Correo electrónico:{" "}
            <a href="mailto:correo@tudominio.com">correo@tudominio.com</a>
          </p>
        </div>
        <div class="footer-social">
          <p>Síguenos en redes sociales:</p>
          {/* <!-- Aquí puedes añadir los iconos de tus redes sociales con enlaces --> */}
          <a href="#">
            <img src="ruta_a_icono_facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="ruta_a_icono_twitter.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="ruta_a_icono_instagram.png" alt="Instagram" />
          </a>
        </div>
        <div class="footer-links">
          <ul>
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
      <div class="footer-copyright">
        <p>Derechos de autor © [Año] [Nombre de tu empresa]</p>
      </div>
    </footer>
  );
}
