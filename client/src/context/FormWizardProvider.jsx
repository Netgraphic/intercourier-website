import { createContext, useEffect, useState } from "react";
import { pricePackages } from "../utilities/pricePackages";

export const FormWizardContext = createContext();

const FormWizardProvider = ({ children }) => {
    const [height, setHeight] = useState(0);
    const [bannerHeight, setBannerHeight] = useState(0);
    const [openModal, setOpenModal] = useState(undefined);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [viewTracking, setViewTracking] = useState(false);
    const propsModal = { openModal, setOpenModal };
    const [pickupPrice, setPickupPrice] = useState(1000);
    const [totalPrice, setTotalPrice] = useState(0);
    const [payLink, setPaylink] = useState(undefined);
    const [arrayOrders, setArrayOrders] = useState([]);
    const [ordersSubmitted, setOrdersSubmitted] = useState([]);

    const [price, setPrice] = useState({
        packageSize: "S",
        packagePrice: pricePackages.sizeS,
    });

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    useEffect(() => {
        setHeight(height);
    }, [height]);

    return (
        <FormWizardContext.Provider
            value={{
                height,
                setHeight,
                bannerHeight,
                setBannerHeight,
                price,
                setPrice,
                formatPrice,
                pickupPrice,
                setPickupPrice,
                totalPrice,
                setTotalPrice,
                agreeTerms,
                setAgreeTerms,
                loading,
                setLoading,
                viewTracking,
                setViewTracking,
                payLink,
                setPaylink,
                arrayOrders,
                setArrayOrders,
                ordersSubmitted,
                setOrdersSubmitted,
                propsModal,
            }}
        >
            {children}
        </FormWizardContext.Provider>
    );
};

export default FormWizardProvider;
