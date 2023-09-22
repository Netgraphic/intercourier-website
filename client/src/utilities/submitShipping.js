import emailjs from "@emailjs/browser";

export const sendEmail = async (formData, paymentMethod) => {
    try {
        let template = "";

        if (paymentMethod === "Transferencia") {
            template = "template_transferencia";
        }

        await emailjs.send(
            "service_79bgf68",
            template,
            formData,
            "4v7ewdebI9d1xDgg7"
        );
        console.log("Envio generado exitosamente");
    } catch (error) {
        console.log(error);
    }
};
