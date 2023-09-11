import { useContext, useEffect, useRef } from "react";
import { FormWizardContext } from "../context/FormWizardProvider";

const Banner = () => {
    const { setBannerHeight } = useContext(FormWizardContext);
    const banner = useRef(null);

    useEffect(() => {
        setBannerHeight(banner.current.clientHeight);
    }, []);

    return (
        <div
            ref={banner}
            className="relative flex h-56 items-center justify-center overflow-hidden bg-mobile-hero bg-contain bg-fixed bg-no-repeat pt-16 md:h-[600px] md:bg-desktop-hero md:bg-cover"
        >
            <h1 className="hidden text-center text-9xl uppercase text-white lg:block">
                Intercourier
            </h1>
            <span className="triangle-upper"></span>
            <span className="triangle-back"></span>
            <span className="triangle"></span>
        </div>
    );
};

export default Banner;
