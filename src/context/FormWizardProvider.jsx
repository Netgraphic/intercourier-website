import { createContext, useEffect, useState } from "react";

export const FormWizardContext = createContext();

const FormWizardProvider = ({ children }) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(height);
    }, [height]);

    return (
        <FormWizardContext.Provider value={{ height, setHeight }}>
            {children}
        </FormWizardContext.Provider>
    );
};

export default FormWizardProvider;
