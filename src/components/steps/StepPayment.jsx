import { useContext, useEffect } from "react";
import { FormWizardContext } from "../../context/FormWizardProvider";

import FormInputRadio from "./fields/FormInputRadio";

import WebIcon from "../icons/WebIcon";
import CardIcon from "../icons/CardIcon";
import TransferIcon from "../icons/TransferIcon";
import ShippingPrice from "../ShippingPrice";

const StepPayment = (props) => {
    const { setHeight, formatPrice } = useContext(FormWizardContext);

    useEffect(() => {
        setHeight(props.tabContainerShipping.current.clientHeight);
    }, []);

    const iconWeb = (
        <WebIcon width="42" className="mx-auto mb-2 stroke-secondary-color" />
    );

    const iconCard = (
        <CardIcon width="42" className="mx-auto mb-2 stroke-secondary-color" />
    );

    const iconTransfer = (
        <TransferIcon
            width="46"
            className="mx-auto mb-2 stroke-secondary-color"
        />
    );

    return (
        <>
            <h3 className="mb-4 text-left text-xl">Forma de pago:</h3>

            <div className="grid grid-cols-1 gap-4">
                <FormInputRadio
                    id="online-payment"
                    icon={iconWeb}
                    label="Online"
                    value="Online"
                    {...props.register("paymentMethod")}
                />

                <FormInputRadio
                    id="card-payment"
                    icon={iconCard}
                    label="Tarjeta (Pago presencial)"
                    value="Tarjeta (Pago presencial)"
                    {...props.register("paymentMethod")}
                />

                <FormInputRadio
                    id="transfer-payment"
                    icon={iconTransfer}
                    label="Transferencia"
                    value="Transferencia"
                    {...props.register("paymentMethod")}
                />
            </div>

            <ShippingPrice
                price={formatPrice(props.getValues("shippingPrice"))}
            />
        </>
    );
};

export default StepPayment;
