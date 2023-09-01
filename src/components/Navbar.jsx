import { useContext } from "react";
import { Link } from "react-scroll";
import { FormWizardContext } from "../context/FormWizardProvider";

import InstagramIcon from "./icons/InstagramIcon";
import WhatsappIcon from "./icons/WhatsappIcon";
import EmailIcon from "./icons/EmailIcon";

const Navbar = ({ isOpen, setIsOpen, displayTab }) => {
    const { propsModal } = useContext(FormWizardContext);

    const links = [
        { name: "Rastrear envío", path: "tabs" },
        { name: "Hacer envío", path: "tabs" },
        { name: "Cotización", path: "tabs" },
        { name: "Proceso de envío", path: "shipping-process" },
        { name: "Sobre la empresa", path: "about" },
        { name: "Preguntas Frecuentes", path: "faq" },
    ];

    return (
        <nav
            className={`absolute top-[72px] min-h-[80vh] w-[330px] rounded-bl-2xl border-b-2 border-l-2 border-main-color bg-menu-color p-10 text-right text-xl text-secondary-color transition-all duration-300 ease-in-out md:relative md:right-auto md:top-auto md:min-h-min md:w-auto md:border-none md:bg-transparent md:p-0 md:text-left md:text-base md:text-white ${
                isOpen ? "right-0" : "right-[-330px]"
            }`}
        >
            {links.map((link, index) => (
                <Link
                    key={index}
                    activeClass="active"
                    smooth
                    spy
                    offset={-90}
                    to={link.path}
                    onClick={() => {
                        displayTab(index + 1);
                        setIsOpen(!isOpen);
                    }}
                    className="mb-8 block cursor-pointer md:mb-0 md:ml-4 md:inline-block"
                >
                    {link.name}
                </Link>
            ))}

            <a
                className="mb-8 block cursor-pointer md:mb-0 md:ml-4 md:hidden"
                onClick={() => {
                    propsModal.setOpenModal("termsConditions");
                    setIsOpen(!isOpen);
                }}
            >
                Términos y Condiciones
            </a>

            <div className="absolute bottom-8 left-[50%] flex translate-x-[-50%] gap-7 text-center text-base md:hidden">
                <div className="flex items-end">
                    <a
                        href="https://www.instagram.com/intercourierchile/"
                        target="_blank"
                    >
                        <InstagramIcon stroke="#D15E49" className="m-auto" />
                        Instagram
                    </a>
                </div>
                <div className="flex items-end">
                    <a href="whatsapp://send?phone=56941347790" target="_blank">
                        <WhatsappIcon stroke="#D15E49" className="m-auto" />
                        Whatsapp
                    </a>
                </div>
                <div className="flex items-end">
                    <a
                        onClick={() => {
                            propsModal.setOpenModal("contact");
                            setIsOpen(!isOpen);
                        }}
                    >
                        <EmailIcon
                            stroke="#D15E49"
                            className="m-auto"
                            width="38"
                        />
                        Email
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
