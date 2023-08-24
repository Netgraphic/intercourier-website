import { useContext, useRef, useState } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

import ShippingProcess from "./sections/ShippingProcess";
import About from "./sections/About";
import SantiagoIcon from "./components/icons/SantiagoIcon";
import Faq from "./sections/Faq";

import { FormWizardContext } from "./context/FormWizardProvider";
import ModalTermsService from "./components/ModalTermsService";

const App = () => {
    const [tab, setTab] = useState(1);
    const { setHeight } = useContext(FormWizardContext);

    const tabContainerShipping = useRef(null);
    const tabContainerPricing = useRef(null);

    const [openModal, setOpenModal] = useState(undefined);
    const props = { openModal, setOpenModal };

    const displayTab = (tabIndex) => {
        if (tabIndex <= 3) {
            setTab(tabIndex);

            switch (tabIndex) {
                case 1:
                    setHeight(0);
                    break;

                case 2:
                    setHeight(tabContainerShipping.current.clientHeight);
                    break;

                case 3:
                    setHeight(tabContainerPricing.current.clientHeight);
                    break;

                default:
                    setHeight(0);
            }
        }
    };

    return (
        <>
            <Header displayTab={displayTab} props={props} />

            <Banner />

            <Tabs
                displayTab={displayTab}
                tab={tab}
                ref={{ tabContainerShipping, tabContainerPricing }}
            />

            <div className="relative mx-auto mt-32">
                <div className="santiago-map container px-5 text-4xl leading-none text-title-color">
                    Envíos a gran parte de Santiago
                    <figure className="absolute -top-12 right-5 z-[-1] w-2/4">
                        <SantiagoIcon />
                    </figure>
                </div>
            </div>

            <ShippingProcess />

            <About />

            <Faq />

            <Footer props={props} />

            <ModalTermsService
                props={props}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>
    );
};

export default App;
