import TabShipping from "./TabShipping";
import TabTracking from "./TabTracking";
import TabPricing from "./TabPricing";

const Tabs = ({ displayTab, tab }) => {
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

            <div className="container relative">
                <TabTracking tab={tab} />
                <TabShipping tab={tab} />
                <TabPricing tab={tab} />
            </div>
        </section>
    );
};

export default Tabs;
