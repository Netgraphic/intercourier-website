import { useState } from "react";

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

    const displayTab = (tabIndex) => {
        setTab(tabIndex);
    };

    return (
        <>
            <Header />

            <Banner />

            <Tabs displayTab={displayTab} tab={tab} />

            <div className="relative mt-32">
                <div className="santiago-map container px-5 text-4xl text-title-color">
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
