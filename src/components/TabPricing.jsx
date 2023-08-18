import { forwardRef } from "react";

const TabPricing = forwardRef(({ tab }, tabContainer3) => {
    return (
        <div
            className={`container absolute top-0 px-5 transition-all duration-200 ease-in-out ${
                tab === 3 ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            <div
                ref={tabContainer3}
                className="container relative -top-8 mx-auto rounded-xl bg-white px-5"
            >
                Tab 3
            </div>
        </div>
    );
});

export default TabPricing;
