import { format } from "date-fns";

export const summary = () => {
    return {
        fieldsSender: (getValues) => {
            return senderSummary(
                getValues("fullnameSender"),
                getValues("addressSender"),
                getValues("zoneSender"),
                getValues("comunaSender"),
                getValues("emailSender"),
                getValues("phoneSender")
            );
        },
        fieldsRecipient: (getValues) => {
            return recipientSummary(
                getValues("fullnameRecipient"),
                getValues("addressRecipient"),
                getValues("zoneRecipient"),
                getValues("comunaRecipient"),
                getValues("emailRecipient"),
                getValues("phoneRecipient")
            );
        },
        fieldsPackage: (getValues) => {
            return packageSummary(
                getValues("packageSize"),
                getValues("packageContents"),
                getValues("expressDelivery"),
                getValues("deliveryDate"),
                getValues("customDeliveryTime"),
                getValues("observations")
            );
        },
        fieldsPayment: (getValues, formatPrice) => {
            return paymentSummary(formatPrice(getValues("shippingPrice")));
        },
    };
};

const senderSummary = (name, address, zone, comuna, email, phone) => {
    const data = [
        {
            name: "Nombre",
            value: name,
        },
        {
            name: "Dirección",
            value: address,
        },
        {
            name: "Sector",
            value: zone,
        },
        {
            name: "Comuna",
            value: comuna,
        },
        {
            name: "Email",
            value: email,
        },
    ];

    if (phone) {
        data.push({
            name: "Teléfono",
            value: phone,
        });
    }

    return data;
};

const recipientSummary = (name, address, zone, comuna, email, phone) => {
    const data = [
        {
            name: "Nombre",
            value: name,
        },
        {
            name: "Dirección",
            value: address,
        },
        {
            name: "Sector",
            value: zone,
        },
        {
            name: "Comuna",
            value: comuna,
        },
        {
            name: "Email",
            value: email,
        },
    ];

    if (phone) {
        data.push({
            name: "Teléfono",
            value: phone,
        });
    }

    return data;
};

const packageSummary = (
    size,
    content,
    expressDelivery,
    deliveryDate,
    customDeliveryTime,
    observations
) => {
    const data = [
        {
            name: "Tamaño",
            value: size,
        },
        {
            name: "Contenido",
            value: content,
        },
        {
            name: "Tipo de envío",
            value: !expressDelivery ? "Normal" : "Express",
        },
    ];

    if (deliveryDate && customDeliveryTime) {
        data.push({
            name: "Envío programado",
            value: format(deliveryDate, "dd/MM/yyyy"),
        });
    }

    if (observations) {
        data.push({
            name: "Observaciones",
            value: observations,
        });
    }

    return data;
};

const paymentSummary = (price) => {
    return [
        {
            name: "Valor del envío",
            value: "$" + price,
        },
    ];
};
