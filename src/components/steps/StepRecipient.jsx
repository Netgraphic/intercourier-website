import { useContext, useEffect, useState } from "react";
import { FormWizardContext } from "../../context/FormWizardProvider";

import FormError from "./fields/FormError";
import FormInputText from "./fields/FormInputText";
import FormSelect from "./fields/FormSelect";

const StepRecipient = (props) => {
    const { setHeight } = useContext(FormWizardContext);
    const comunaActive = props.getValues("zoneRecipient");

    const [comunas, setComunas] = useState(() => {
        if (comunaActive === "") {
            return [];
        }

        return JSON.parse(localStorage.getItem("comunasRecipient")) || [];
    });

    const zones = [
        "Centro",
        "Norte",
        "Nororiente",
        "Norponiente",
        "Sur",
        "Suroriente",
        "Surponiente",
    ];

    useEffect(() => {
        localStorage.setItem("comunasRecipient", JSON.stringify(comunas));
        setHeight(props.tabContainerShipping.current.clientHeight);
    }, [comunas]);

    return (
        <>
            <h3 className="mb-4 text-left text-xl">
                Información del destinatario:
            </h3>

            <FormInputText
                label="Nombre completo o Empresa"
                type="text"
                placeholder="Ingrese nombre"
                required="true"
                {...props.register("fullnameRecipient", { required: true })}
            >
                <FormError error={props.errors.fullnameRecipient} />
            </FormInputText>

            <FormInputText
                label="Dirección"
                type="text"
                placeholder="Ingrese dirección"
                required="true"
                {...props.register("addressRecipient", { required: true })}
            >
                <FormError error={props.errors.addressRecipient} />
            </FormInputText>

            <FormSelect
                label="Seleccione sector"
                options={zones}
                required="true"
                {...props.register("zoneRecipient", {
                    required: true,
                    onChange: (e) => {
                        setComunas(props.comunasSantiago(e.target.value));
                        props.setValue("comunaRecipient", "");
                    },
                })}
            >
                <FormError error={props.errors.zoneRecipient} />
            </FormSelect>

            <FormSelect
                label="Seleccione comuna"
                options={comunas}
                required="true"
                {...props.register("comunaRecipient", {
                    required: true,
                    onChange: (e) => {
                        props.setValue("comunaRecipient", e.target.value);
                    },
                })}
            >
                <FormError error={props.errors.comunaRecipient} />
            </FormSelect>

            <FormInputText
                label="Email"
                type="email"
                placeholder="Ingrese email"
                required="true"
                {...props.register("emailRecipient", {
                    required: true,
                    onChange: (e) => {
                        if (
                            !props.validateEmail(e.target.value) &&
                            e.target.value !== ""
                        ) {
                            props.setError("emailRecipient", {
                                type: "custom",
                                message: "Formato de email incorrecto",
                            });
                        } else {
                            props.clearErrors("emailRecipient");
                        }
                    },
                })}
            >
                <FormError error={props.errors.emailRecipient} />
            </FormInputText>

            <FormInputText
                label="Teléfono"
                type="tel"
                placeholder="Ingrese teléfono"
                {...props.register("phoneRecipient")}
            ></FormInputText>

            <p>
                <span className="mr-1 text-secondary-color">(*)</span>Campos
                obligatorios
            </p>
        </>
    );
};

export default StepRecipient;
