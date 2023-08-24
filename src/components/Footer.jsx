import { Link } from "react-scroll";

import EmailIcon from "./icons/EmailIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import WhatsappIcon from "./icons/WhatsappIcon";

const Footer = ({ props }) => {
    return (
        <footer className="mt-28 bg-main-color p-7 text-center text-white">
            <div className="container mx-auto">
                Contacto y Redes sociales
                <div className="mt-3 flex justify-center gap-5">
                    <a
                        href="https://www.instagram.com/intercourierchile/"
                        target="_blank"
                    >
                        <InstagramIcon
                            width="35"
                            stroke="#fff"
                            className="m-auto"
                        />
                        Instagram
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=56941347790"
                        target="_blank"
                    >
                        <FacebookIcon
                            width="32"
                            stroke="#fff"
                            className="m-auto"
                        />
                        Facebook
                    </a>
                    <a href="whatsapp://send?phone=56941347790" target="_blank">
                        <WhatsappIcon
                            width="36"
                            stroke="#fff"
                            className="m-auto"
                        />
                        Whatsapp
                    </a>
                    <div>
                        <EmailIcon
                            width="36"
                            stroke="#fff"
                            className="m-auto"
                        />
                        Email
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 leading-none">
                    <Link smooth spy offset={-90} to="shipping-process">
                        Proceso de envío
                    </Link>
                    <div className="separator"></div>
                    <Link smooth spy offset={-90} to="about">
                        Sobre la empresa
                    </Link>
                    <div className="separator"></div>
                    <Link smooth spy offset={-90} to="faq">
                        Preguntas Frecuentes
                    </Link>
                </div>
                <a
                    className="mt-5 block cursor-pointer text-lg"
                    onClick={() => props.setOpenModal("termsConditions")}
                >
                    Términos y Condiciones
                </a>
                <address>
                    Website design by Natalia Botko & developed by Diego Moris
                </address>
            </div>
        </footer>
    );
};

export default Footer;
