export const formValidate = () => {
    return {
        required: {
            value: true,
            message: "Campo obligatorio",
        },
        patternEmail: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Formato de email incorrecto",
        },
    };
};
