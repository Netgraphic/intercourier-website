import { useContext } from "react";
import { Link } from "react-scroll";

import { FormWizardContext } from "../context/FormWizardProvider";

import EmailIcon from "./icons/EmailIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import WhatsappIcon from "./icons/WhatsappIcon";

const Footer = () => {
    const { propsModal } = useContext(FormWizardContext);

    return (
        <footer className="mt-28 bg-main-color p-7 text-center text-white">
            <div className="container mx-auto">
                Contacto y Redes sociales
                <div className="mt-3 flex justify-center gap-5">
                    <a
                        href="https://www.instagram.com/intercourierchile/"
                        target="_blank"
                        className="grid grid-cols-1 items-end"
                    >
                        <InstagramIcon
                            width="36"
                            stroke="#fff"
                            className="m-auto"
                        />
                        Instagram
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=56941347790"
                        target="_blank"
                        className="grid grid-cols-1 items-end"
                    >
                        <FacebookIcon
                            width="35"
                            stroke="#fff"
                            className="m-auto"
                        />
                        Facebook
                    </a>
                    <a
                        href="whatsapp://send?phone=56941347790"
                        target="_blank"
                        className="grid grid-cols-1 items-end"
                    >
                        <WhatsappIcon
                            width="37"
                            stroke="#fff"
                            className="m-auto"
                        />
                        Whatsapp
                    </a>
                    <a
                        onClick={() => propsModal.setOpenModal("contact")}
                        className="grid grid-cols-1 items-end"
                    >
                        <EmailIcon
                            width="33"
                            stroke="#fff"
                            className="m-auto"
                        />
                        Email
                    </a>
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
                    onClick={() => propsModal.setOpenModal("termsConditions")}
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
