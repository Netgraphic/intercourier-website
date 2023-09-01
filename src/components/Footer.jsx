import { useContext } from "react";
import { Link } from "react-scroll";

import { FormWizardContext } from "../context/FormWizardProvider";

import EmailIcon from "./icons/EmailIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import WhatsappIcon from "./icons/WhatsappIcon";

const Footer = ({ displayTab }) => {
    const { propsModal } = useContext(FormWizardContext);

    return (
        <footer className="mt-28 bg-main-color p-7 text-center text-white">
            <div className="container mx-auto md:flex md:w-3/4 md:justify-between">
                <div className="md:hidden">Contacto y Redes sociales</div>
                <div className="mt-3 flex justify-center gap-5 md:grid md:grid-cols-1">
                    <a
                        href="https://www.instagram.com/intercourierchile/"
                        target="_blank"
                        className="grid grid-cols-1 items-end md:flex md:items-center md:gap-3 md:text-xl"
                    >
                        <InstagramIcon
                            width="36"
                            stroke="#fff"
                            className="m-auto md:m-0"
                        />
                        <span className="block md:hidden">Instagram</span>
                        <span className="hidden md:inline-block">
                            @intercourierchile
                        </span>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=56941347790"
                        target="_blank"
                        className="grid grid-cols-1 items-end md:flex md:items-center md:gap-3 md:text-xl"
                    >
                        <FacebookIcon
                            width="35"
                            stroke="#fff"
                            className="m-auto md:m-0"
                        />
                        <span className="block md:hidden">Facebook</span>
                        <span className="hidden md:inline-block">
                            @intercourierchile
                        </span>
                    </a>
                    <a
                        href="whatsapp://send?phone=56941347790"
                        target="_blank"
                        className="grid grid-cols-1 items-end md:flex md:items-center md:gap-3 md:text-xl"
                    >
                        <WhatsappIcon
                            width="37"
                            stroke="#fff"
                            className="m-auto md:m-0"
                        />
                        <span className="block md:hidden">Whatsapp</span>
                        <span className="hidden md:inline-block">
                            +56 9 41347790
                        </span>
                    </a>
                    <a
                        onClick={() => propsModal.setOpenModal("contact")}
                        className="grid cursor-pointer grid-cols-1 items-end md:flex md:items-center md:gap-3 md:text-xl"
                    >
                        <EmailIcon
                            width="33"
                            stroke="#fff"
                            className="m-auto md:m-0"
                        />
                        <span className="block md:hidden">Email</span>
                        <span className="hidden md:inline-block">
                            contacto@intercourier.cl
                        </span>
                    </a>
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 leading-none md:flex-col md:items-start md:justify-start md:text-xl">
                    <Link
                        smooth
                        spy
                        offset={-90}
                        to="tabs"
                        className="cursor-pointer"
                        onClick={() => displayTab(1)}
                    >
                        Rastrear envío
                    </Link>

                    <Link
                        smooth
                        spy
                        offset={-90}
                        to="tabs"
                        className="cursor-pointer"
                        onClick={() => displayTab(2)}
                    >
                        Hacer envío
                    </Link>

                    <Link
                        smooth
                        spy
                        offset={-90}
                        to="tabs"
                        className="cursor-pointer"
                        onClick={() => displayTab(3)}
                    >
                        Cotización
                    </Link>
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 leading-none md:flex-col md:items-start md:justify-start md:text-xl">
                    <Link
                        smooth
                        spy
                        offset={-90}
                        to="shipping-process"
                        className="cursor-pointer"
                    >
                        Proceso de envío
                    </Link>
                    <div className="separator md:hidden"></div>
                    <Link
                        smooth
                        spy
                        offset={-90}
                        to="about"
                        className="cursor-pointer"
                    >
                        Sobre la empresa
                    </Link>
                    <div className="separator md:hidden"></div>
                    <Link
                        smooth
                        spy
                        offset={-90}
                        to="faq"
                        className="cursor-pointer"
                    >
                        Preguntas Frecuentes
                    </Link>
                    <a
                        className="hidden cursor-pointer md:block"
                        onClick={() =>
                            propsModal.setOpenModal("termsConditions")
                        }
                    >
                        Términos y Condiciones
                    </a>
                </div>
                <a
                    className="mt-5 block cursor-pointer text-lg md:hidden"
                    onClick={() => propsModal.setOpenModal("termsConditions")}
                >
                    Términos y Condiciones
                </a>
            </div>
            <address>
                Website design by Natalia Botko & developed by Diego Moris
            </address>
        </footer>
    );
};

export default Footer;
