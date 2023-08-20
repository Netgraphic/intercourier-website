export const validateEmail = (emailSender = "") => {
    return emailSender.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const checkEmail = (emailSender) => {
    if (!validateEmail(emailSender)) {
        return false;
    }

    return true;
};

export const checkValidateTabSender = (
    fullnameSender = "",
    addressSender = "",
    zoneSender = "",
    comunaSender = "",
    emailSender = ""
) => {
    const validEmail = checkEmail(emailSender);
    //console.log(emailSender);
    console.log(validEmail);

    if (
        fullnameSender === "" ||
        addressSender === "" ||
        zoneSender === "" ||
        comunaSender === "" ||
        emailSender === "" ||
        !validEmail
    ) {
        return false;
    }

    return true;
};

export const errorMessagesSender = (
    fullnameSender = "",
    addressSender = "",
    zoneSender = "",
    comunaSender = "",
    emailSender = "",
    setError = ""
) => {
    const validEmail = checkEmail(emailSender);

    if (fullnameSender === "") {
        setError("fullnameSender", {
            type: "custom",
            message: "Campo obligatorio",
        });
    }

    if (addressSender === "") {
        setError("addressSender", {
            type: "custom",
            message: "Campo obligatorio",
        });
    }

    if (zoneSender === "") {
        setError("zoneSender", {
            type: "custom",
            message: "Campo obligatorio",
        });
    }

    if (comunaSender === "") {
        setError("comunaSender", {
            type: "custom",
            message: "Campo obligatorio",
        });
    }

    if (emailSender === "") {
        setError("emailSender", {
            type: "custom",
            message: "Campo obligatorio",
        });
    }

    if (emailSender !== "" && !validEmail) {
        setError("emailSender", {
            type: "custom",
            message: "Formato de email incorrecto",
        });
    }
};

export const checkValidateTabRecipient = () => {
    if (fullnameRecipient === "" || addressRecipient === "") {
        return false;
    }

    return true;
};

export const errorMessagesRecipient = () => {
    if (fullnameRecipient === "") {
        setError("fullnameRecipient", {
            type: "custom",
            message: "Campo obligatorio",
        });
    }

    if (addressRecipient === "") {
        setError("addressRecipient", {
            type: "custom",
            message: "Campo obligatorio",
        });
    }
};
