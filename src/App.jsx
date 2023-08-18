import { useRef, useState } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Tabs from "./components/Tabs";

import ShippingProcess from "./sections/ShippingProcess";
import About from "./sections/About";
import SantiagoIcon from "./components/icons/SantiagoIcon";
import Faq from "./sections/Faq";
import Footer from "./components/Footer";

const App = () => {
    const [tab, setTab] = useState(1);
    const [height, setHeight] = useState(0);

    const tabContainer1 = useRef(null);
    const tabContainer2 = useRef(null);
    const tabContainer3 = useRef(null);

    const displayTab = (tabIndex) => {
        if (tabIndex <= 3) {
            setTab(tabIndex);

            switch (tabIndex) {
                case 1:
                    setHeight(tabContainer1.current.clientHeight);
                    console.log("Tab: " + height);
                    break;

                case 2:
                    setHeight(tabContainer2.current.clientHeight);
                    console.log("Tab: " + height);
                    break;

                case 3:
                    setHeight(tabContainer3.current.clientHeight);
                    console.log("Tab: " + height);
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
                height={height}
                ref={{ tabContainer1, tabContainer2, tabContainer3 }}
            />

            <div className="relative mx-auto mt-32">
                <div className="santiago-map container px-5 text-4xl leading-none text-title-color">
                    Envíos por todo Santiago
                    <figure className="absolute -top-12 right-5 z-[-1] w-2/4">
                        <SantiagoIcon />
                    </figure>
                </div>
            </div>

            <ShippingProcess />

            <About />

            <Faq />

            <Footer />
        </>
    );
};

export default App;
