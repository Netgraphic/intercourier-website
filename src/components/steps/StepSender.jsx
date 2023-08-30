import { useContext, useEffect, useState } from "react";
import { FormWizardContext } from "../../context/FormWizardProvider";

import FormError from "./fields/FormError";
import FormInputText from "./fields/FormInputText";
import FormSelect from "./fields/FormSelect";

const StepSender = (props) => {
    const { setHeight } = useContext(FormWizardContext);
    const comunaActive = props.getValues("zoneSender");

    const [comunas, setComunas] = useState(() => {
        if (comunaActive === "") {
            return [];
        }

        return JSON.parse(localStorage.getItem("comunasSender")) || [];
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
        localStorage.setItem("comunasSender", JSON.stringify(comunas));
        setHeight(props.tabContainerShipping.current.clientHeight);
    }, [comunas]);

    return (
        <>
            <h3 className="mb-4 text-left text-xl">
                Información del remitente:
            </h3>

            <FormInputText
                id="fullnameSender"
                label="Nombre completo o Empresa"
                type="text"
                placeholder="Ingrese nombre"
                required="true"
                {...props.register("fullnameSender", { required: true })}
            >
                <FormError error={props.errors.fullnameSender} />
            </FormInputText>

            <FormInputText
                id="addressSender"
                label="Dirección"
                type="text"
                placeholder="Ingrese dirección"
                required="true"
                {...props.register("addressSender", { required: true })}
            >
                <FormError error={props.errors.addressSender} />
            </FormInputText>

            <FormSelect
                id="zoneSender"
                label="Seleccione sector"
                options={zones}
                required="true"
                {...props.register("zoneSender", {
                    required: true,
                    onChange: (e) => {
                        setComunas(props.comunasSantiago(e.target.value));
                        props.setValue("comunaSender", "");
                    },
                })}
            >
                <FormError error={props.errors.zoneSender} />
            </FormSelect>

            <FormSelect
                id="comunaSender"
                label="Seleccione comuna"
                options={comunas}
                required="true"
                {...props.register("comunaSender", {
                    required: true,
                    onChange: (e) => {
                        props.setValue("comunaSender", e.target.value);
                    },
                })}
            >
                <FormError error={props.errors.comunaSender} />
            </FormSelect>

            <FormInputText
                id="emailSender"
                label="Email"
                type="email"
                placeholder="Ingrese email"
                required="true"
                {...props.register("emailSender", {
                    required: true,
                    onChange: (e) => {
                        if (
                            !props.validateEmail(e.target.value) &&
                            e.target.value !== ""
                        ) {
                            props.setError("emailSender", {
                                type: "custom",
                                message: "Formato de email incorrecto",
                            });
                        } else {
                            props.clearErrors("emailSender");
                        }
                    },
                })}
            >
                <FormError error={props.errors.emailSender} />
            </FormInputText>

            <FormInputText
                id="phoneSender"
                label="Teléfono"
                type="tel"
                placeholder="Ingrese teléfono"
                {...props.register("phoneSender")}
            ></FormInputText>

            <p>
                <span className="mr-1 text-secondary-color">(*)</span>Campos
                obligatorios
            </p>
        </>
    );
};

export default StepSender;
