import { forwardRef, useContext } from "react";

import TabShipping from "./TabShipping";
import TabTracking from "./TabTracking";
import TabPricing from "./TabPricing";

import { FormWizardContext } from "../context/FormWizardProvider";

const Tabs = forwardRef(
    (
        { displayTab, tab },
        { tabContainerTracking, tabContainerShipping, tabContainerPricing }
    ) => {
        const { height } = useContext(FormWizardContext);

        return (
            <section id="tabs" className="bg-main-color">
                <div className="container mx-auto flex justify-center gap-5 pb-12 pt-5 text-white">
                    <a
                        className={`cursor-pointer ${tab === 1 && "activeTab"}`}
                        onClick={() => displayTab(1)}
                    >
                        Rastrear envío
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
                        Cotización
                    </a>
                </div>

                <div
                    className="container relative mx-auto"
                    style={{ height: height + "px" }}
                >
                    <TabTracking tab={tab} ref={tabContainerTracking} />
                    <TabShipping tab={tab} ref={tabContainerShipping} />
                    <TabPricing tab={tab} ref={tabContainerPricing} />
                </div>
            </section>
        );
    }
);

export default Tabs;
