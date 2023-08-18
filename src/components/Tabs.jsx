import { forwardRef } from "react";

import TabShipping from "./TabShipping";
import TabTracking from "./TabTracking";
import TabPricing from "./TabPricing";

const Tabs = forwardRef(
    (
        { displayTab, tab, height },
        { tabContainer1, tabContainer2, tabContainer3 }
    ) => {
        return (
            <section id="tabs" className="bg-main-color">
                <div className="container mx-auto flex justify-center gap-5 pb-12 pt-5 text-white">
                    <a
                        className={`cursor-pointer ${tab === 1 && "activeTab"}`}
                        onClick={() => displayTab(1)}
                    >
                        Seguimiento
                    </a>
                    <a
                        className={`cursor-pointer ${tab === 2 && "activeTab"}`}
                        onClick={() => displayTab(2)}
                    >
                        Hacer envío
                    </a>
                    <a
                        className={`cursor-pointer ${tab === 3 && "activeTab"}`}
                        onClick={() => displayTab(3)}
                    >
                        Lista de precios
                    </a>
                </div>

                <div
                    className="container relative mx-auto"
                    style={{ minHeight: height + "px" }}
                >
                    <TabTracking tab={tab} ref={tabContainer1} />
                    <TabShipping tab={tab} ref={tabContainer2} />
                    <TabPricing tab={tab} ref={tabContainer3} />
                </div>
            </section>
        );
    }
);

export default Tabs;
