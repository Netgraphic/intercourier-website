import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = ({ displayTab }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-20 w-full border-b border-secondary-color bg-main-color text-white">
            <div className="container mx-auto p-5 xl:flex xl:w-11/12 xl:items-center xl:justify-between">
                {/* Logo */}
                <a
                    href="./"
                    title="Intercourier &raquo; Ir al inicio"
                    className="text-2xl uppercase"
                >
                    <Logo
                        fill="#a03724"
                        className="h-auto w-52 fill-white xl:w-64"
                    />
                </a>

                {/* Menu */}
                <a
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute right-5 top-3 cursor-pointer text-3xl xl:hidden"
                >
                    {isOpen ? (
                        <FontAwesomeIcon icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </a>
                <Navbar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    displayTab={displayTab}
                />
            </div>
        </header>
    );
};

export default Header;
