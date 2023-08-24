import { createContext, useEffect, useState } from "react";

export const FormWizardContext = createContext();

const FormWizardProvider = ({ children }) => {
    const [height, setHeight] = useState(0);
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
            }}
        >
            {children}
        </FormWizardContext.Provider>
    );
};

export default FormWizardProvider;
