import { useState } from "react";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import InstagramIcon from "./icons/InstagramIcon";
import PhoneIcon from "./icons/PhoneIcon";
import EmailIcon from "./icons/EmailIcon";

const Header = ({ displayTab }) => {
    const links = [
        { name: "Seguimiento", path: "tabs" },
        { name: "Hacer envío", path: "tabs" },
        { name: "Lista de precios", path: "tabs" },
        { name: "Proceso de envío", path: "shipping-process" },
        { name: "Sobre la empresa", path: "about" },
        { name: "Preguntas Frecuentes", path: "faq" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-10 w-full bg-main-color text-white">
            <div className="p-5 md:flex md:items-center md:justify-between">
                {/* Logo */}
                <a href="./" className="text-2xl uppercase">
                    Intercourier
                </a>

                {/* Menu */}
                <a
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute right-5 top-4 cursor-pointer text-3xl md:hidden"
                >
                    {isOpen ? (
                        <FontAwesomeIcon icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </a>
                <nav
                    className={`absolute top-[72px] min-h-[80vh] w-[330px] rounded-bl-2xl border-b-2 border-l-2 border-main-color bg-menu-color p-10 text-right text-xl text-secondary-color transition-all duration-300 ease-in-out md:relative md:right-auto md:top-auto md:min-h-min md:w-auto md:bg-transparent md:p-0 md:text-left md:text-base md:text-white ${
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
                            className="mb-8 block cursor-pointer md:mb-0 md:ml-5 md:inline-block"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="absolute bottom-8 left-[50%] flex translate-x-[-50%] gap-7 text-center text-base md:hidden">
                        <div>
                            <a
                                href="https://www.instagram.com/intercourierchile/"
                                target="_blank"
                            >
                                <InstagramIcon
                                    stroke="#D15E49"
                                    className="m-auto"
                                />
                                Instagram
                            </a>
                        </div>
                        <div>
                            <PhoneIcon stroke="#D15E49" className="m-auto" />
                            Teléfono
                        </div>
                        <div>
                            <EmailIcon stroke="#D15E49" className="m-auto" />
                            Email
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
