import { useContext, useEffect } from "react";
import { Checkbox, Label } from "flowbite-react";
import { FormWizardContext } from "../../context/FormWizardProvider";
import { format } from "date-fns";

import SummaryDetails from "../SummaryDetails";

import {
    senderSummary,
    recipientSummary,
    packageSummary,
    paymentSummary,
} from "../../utilities/summary";

const StepSummary = (props) => {
    const { setHeight, formatPrice, agreeTerms, setAgreeTerms, propsModal } =
        useContext(FormWizardContext);

    const fieldsSender = senderSummary(
        props.getValues("fullnameSender"),
        props.getValues("addressSender"),
        props.getValues("zoneSender"),
        props.getValues("comunaSender"),
        props.getValues("emailSender")
    );

    const fieldsRecipient = recipientSummary(
        props.getValues("fullnameRecipient"),
        props.getValues("addressRecipient"),
        props.getValues("zoneRecipient"),
        props.getValues("comunaRecipient"),
        props.getValues("emailRecipient")
    );

    const fieldsPackage = packageSummary(
        props.getValues("packageSize"),
        props.getValues("packageContents"),
        props.getValues("expressDelivery")
    );

    const fieldsPayment = paymentSummary(
        props.getValues("paymentMethod"),
        formatPrice(props.getValues("shippingPrice"))
    );

    if (props.getValues("phoneSender")) {
        fieldsSender.push({
            name: "Teléfono",
            value: props.getValues("phoneSender"),
        });
    }

    if (props.getValues("phoneRecipient")) {
        fieldsRecipient.push({
            name: "Teléfono",
            value: props.getValues("phoneRecipient"),
        });
    }

    if (
        props.getValues("deliveryDate") &&
        props.getValues("customDeliveryTime")
    ) {
        fieldsPackage.push({
            name: "Envío programado",
            value: format(props.getValues("deliveryDate"), "dd/MM/yyyy"),
        });
    }

    if (props.getValues("observations")) {
        fieldsPackage.push({
            name: "Observaciones",
            value: props.getValues("observations"),
        });
    }

    useEffect(() => {
        setHeight(props.tabContainerShipping.current.clientHeight);
    }, []);

    return (
        <>
            <h3 className="mb-2 text-left text-xl">Resumen del envío:</h3>

            <SummaryDetails
                title="Información del remitente"
                fields={fieldsSender}
            />

            <SummaryDetails
                title="Información del destinatario"
                fields={fieldsRecipient}
            />

            <SummaryDetails
                title="Información del paquete"
                fields={fieldsPackage}
            />

            <SummaryDetails
                title="Información del pago"
                fields={fieldsPayment}
            />

            {props.getValues("paymentMethod") === "Transferencia" && (
                <>
                    <h4 className="mb-1 text-lg text-secondary-color">
                        Datos de la cuenta
                    </h4>
                    <ul className="text-sm [&>li:last-child]:mb-0 [&>li]:mb-1">
                        <li className="uppercase">
                            Sociedad de inversiones jm spa
                        </li>
                        <li>RUT: 77.289.443-0</li>
                        <li className="uppercase">
                            Cuenta corriente Banco Itau
                        </li>
                        <li>Número: 0221341785</li>
                        <li>Email: pagos@intercourier.cl</li>
                    </ul>
                </>
            )}

            <div className="mt-4 flex items-center gap-2">
                <Checkbox
                    id="agree"
                    className="checked:bg-main-color focus:ring-main-color"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                />
                <Label className="flex" htmlFor="agree">
                    He leído y acepto los
                    <a
                        className="ml-1 cursor-pointer text-secondary-color hover:underline"
                        onClick={() =>
                            propsModal.setOpenModal("termsConditions")
                        }
                    >
                        Términos y Condiciones
                    </a>
                </Label>
            </div>
        </>
    );
};

export default StepSummary;