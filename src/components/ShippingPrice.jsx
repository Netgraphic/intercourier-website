import { useContext } from "react";
import { FormWizardContext } from "../context/FormWizardProvider";

const ShippingPrice = ({ price }) => {
    const { formatPrice } = useContext(FormWizardContext);

    return (
        <>
            <div className="mt-8 w-full border-t-2 border-secondary-color pt-2 text-2xl text-secondary-color">
                Total envío: $<span>{formatPrice(price)}</span>
            </div>
        </>
    );
};

export default ShippingPrice;
