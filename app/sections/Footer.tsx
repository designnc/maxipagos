// app/components/ui/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaHeart, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-5 bg-primary text-primary-950" id="gm_footer">
      <div className="container mx-auto max-w-7xl my-4 px-12 py-8 rounded-3xl bg-primary-100">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center">
          {/* Primera columna: Logo y redes sociales */}
          <div className="md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
            <figure className="inline-block w-auto">
              <Image src="maxipagos-logo.svg" alt="Logo de Maxipagos" width={150} height={50} className="mx-auto md:mx-0" />
              <figcaption className="font-bold mt-2">Simplifica tus pagos</figcaption>
            </figure>
            <div className="flex justify-center md:justify-start mt-5">
              <a
                href="#"
                className="rounded-full bg-primary hover:bg-primary-800 p-3 mr-3 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-primary-50 text-3xl" />
              </a>
              <a
                href="#"
                className="rounded-full bg-primary hover:bg-primary-800 p-3 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-primary-50 text-3xl" />
              </a>
            </div>
          </div>

          {/* Segunda columna: Enlaces y Soporte */}
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div className="flex flex-col sm:flex-row">
              {/* Enlaces */}
              <div className="sm:w-1/2 mb-4 sm:mb-0">
                <span className="font-bold block mb-2">Enlaces</span>
                <ul className="list-none text-sm">
                  <li className="mb-1">
                    <Link
                      href="/login"
                      className="text-decoration-none text-small hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ingreso
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/register"
                      className="text-decoration-none text-small hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Registrarse
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Soporte */}
              <div className="sm:w-1/2">
                <span className="font-bold block mb-2">Soporte</span>
                <ul className="list-none text-sm">
                  <li className="mb-1">
                    <Link
                      href="https://help.getmed.cl"
                      className="text-decoration-none text-small hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Centro de ayuda
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://help.getmed.cl/terms.php"
                      className="text-decoration-none text-small hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Términos y condiciones
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="https://help.getmed.cl/delete-account.php"
                      className="text-decoration-none text-small hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Eliminar cuenta
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tercera columna: Descarga de la aplicación */}
          <div className="md:w-1/3">
            {/* <span className="font-bold block mb-2">Descarga la aplicación</span>
            <a
              href="https://play.google.com/store/apps/details?id=com.fosi.getmed&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-3"
            >
              <Image src="/img/google-play-badge.png" alt="Google Play" width={124} height={40} />
            </a> */}
          </div>
          
        </div>

        {/* Línea divisoria */}
        <hr className="my-4 border-primary opacity-10" />  

        {/* Segunda fila: Derechos de autor */}
        <div className="w-full md:w-2/3 mb-4 md:mb-0 text-foregrount">
              <p>
                Maxipagos &copy; {new Date().getFullYear()} | Desarrollado
                con{" "}
                <FaHeart
                  className="inline text-red-500"
                  size={20}
                  aria-hidden="true"
                />{" "}
                por{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-accent"
                >
                  FOSI
                </a>
              </p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
