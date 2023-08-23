import { useContext, useEffect } from "react";
import { FormWizardContext } from "../../context/FormWizardProvider";
import { format } from "date-fns";

import SummarySender from "../SummarySender";
import SummaryRecipient from "../SummaryRecipient";
import SummaryPayment from "../SummaryPayment";
import SummaryPackage from "../SummaryPackage";

import {
    senderSummary,
    recipientSummary,
    packageSummary,
    paymentSummary,
} from "../../utilities/summary";

const StepSummary = (props) => {
    const { setHeight } = useContext(FormWizardContext);

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

    const fieldsPayment = paymentSummary(props.getValues("paymentMethod"));

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

            <SummarySender
                title="Información del remitente"
                fieldsSender={fieldsSender}
            />

            <SummaryRecipient
                title="Información del destinatario"
                fieldsRecipient={fieldsRecipient}
            />

            <SummaryPackage
                title="Información del paquete"
                fieldsPackage={fieldsPackage}
            />

            <SummaryPayment
                title="Información del pago"
                fieldsPayment={fieldsPayment}
            />
        </>
    );
};

export default StepSummary;
