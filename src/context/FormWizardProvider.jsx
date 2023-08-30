import { createContext, useEffect, useState } from "react";

export const FormWizardContext = createContext();

const FormWizardProvider = ({ children }) => {
    const [height, setHeight] = useState(0);
    const [openModal, setOpenModal] = useState(undefined);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [viewTracking, setViewTracking] = useState(false);
    const propsModal = { openModal, setOpenModal };

    const [price, setPrice] = useState({
        packageSize: "S",
        packagePrice: 2000,
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
                price,
                setPrice,
                formatPrice,
                agreeTerms,
                setAgreeTerms,
                loading,
                setLoading,
                viewTracking,
                setViewTracking,
                propsModal,
            }}
        >
            {children}
        </FormWizardContext.Provider>
    );
};

export default FormWizardProvider;
