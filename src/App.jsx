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
import ModalTermsService from "./components/modals/ModalTermsService";
import ModalContact from "./components/modals/ModalContact";

const App = () => {
    const [tab, setTab] = useState(1);
    const { setHeight, setViewTracking } = useContext(FormWizardContext);

    const tabContainerTracking = useRef(null);
    const tabContainerShipping = useRef(null);
    const tabContainerPricing = useRef(null);

    const displayTab = (tabIndex) => {
        if (tabIndex <= 3) {
            setTab(tabIndex);

            switch (tabIndex) {
                case 1:
                    setHeight(0);
                    setViewTracking(false);
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
            <Header displayTab={displayTab} />

            <Banner />

            <Tabs
                displayTab={displayTab}
                tab={tab}
                ref={{
                    tabContainerTracking,
                    tabContainerShipping,
                    tabContainerPricing,
                }}
            />

            <div className="relative mx-auto mt-32 md:mt-0">
                <div className="santiago-map container mx-auto px-5 text-4xl leading-none text-title-color md:w-3/5">
                    <h2 className="md:relative md:top-52 md:w-1/2 md:text-6xl">
                        Envíos a gran parte de Santiago
                    </h2>
                    <figure className="absolute -top-12 right-5 z-[-1] w-2/4 md:relative md:-top-20 md:float-right md:w-1/2">
                        <SantiagoIcon />
                    </figure>
                </div>
            </div>

            <ShippingProcess />

            <About />

            <Faq />

            <Footer displayTab={displayTab} />

            <ModalTermsService />

            <ModalContact />
        </>
    );
};

export default App;
