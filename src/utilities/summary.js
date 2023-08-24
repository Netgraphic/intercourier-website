export const senderSummary = (name, address, zone, comuna, email) => {
    return [
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
};

export const recipientSummary = (name, address, zone, comuna, email) => {
    return [
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
};

export const packageSummary = (size, content, expressDelivery) => {
    return [
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
};

export const paymentSummary = (payment, price) => {
    return [
        {
            name: "Forma de pago",
            value: payment,
        },
        {
            name: "Total a pagar",
            value: "$" + price,
        },
    ];
};
