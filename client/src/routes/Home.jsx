import { useContext, useRef, useState } from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Tabs from "../components/Tabs";
import Footer from "../components/Footer";

import ShippingProcess from "../sections/ShippingProcess";
import Services from "../sections/Services";
import SantiagoIcon from "../components/icons/SantiagoIcon";
import Faq from "../sections/Faq";

import { FormWizardContext } from "../context/FormWizardProvider";
import ModalTermsService from "../components/modals/ModalTermsService";
import ModalContact from "../components/modals/ModalContact";
import { useEffect } from "react";

const Home = () => {
    const [tab, setTab] = useState(1);
    const { height, setHeight, setViewTracking } =
        useContext(FormWizardContext);

    const tabContainerTracking = useRef(null);
    const tabContainerShipping = useRef(null);
    const tabContainerPricing = useRef(null);

    useEffect(() => {
        setHeight(0);
    }, [height]);

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

            <div className="relative mx-auto mt-10 md:mt-0">
                <div className="santiago-map">
                    <div className="santiago-triangle-top bottom-[125%] h-8 md:bottom-[135%] xl:bottom-[125%]  xl:h-12"></div>
                    <div className="container relative mx-auto flex w-4/5 items-center justify-between md:w-3/5">
                        <h2 className="w-1/2 py-2 text-2xl leading-6 text-white sm:text-2xl md:py-5 md:text-3xl lg:text-4xl xl:text-6xl">
                            Envíos a gran parte de Santiago
                        </h2>
                        <figure className="absolute right-0 w-1/2">
                            <SantiagoIcon />
                        </figure>
                    </div>
                    <div className="santiago-triangle-bottom top-[115%] h-5 md:top-[120%] xl:top-[115%] xl:h-10"></div>
                </div>
            </div>

            <ShippingProcess />

            <Services />

            <Faq />

            <Footer displayTab={displayTab} />

            <ModalTermsService />

            <ModalContact />
        </>
    );
};

export default Home;
