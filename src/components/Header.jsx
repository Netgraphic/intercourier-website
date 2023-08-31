import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";

const Header = ({ displayTab }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-10 w-full bg-main-color text-white">
            <div className="container mx-auto p-5 md:flex md:w-3/4 md:items-center md:justify-between">
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
