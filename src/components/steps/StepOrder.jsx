import { useContext, useEffect } from "react";
import { FormWizardContext } from "../../context/FormWizardProvider";

import InstagramIcon from "../icons/InstagramIcon";
import WhatsappIcon from "../icons/WhatsupIcon";
import WebIcon from "../icons/WebIcon";

import FormInputRadio from "./fields/FormInputRadio";

const StepOrder = (props) => {
    const { setHeight } = useContext(FormWizardContext);

    const iconWeb = (
        <WebIcon width="42" className="mx-auto mb-2 stroke-secondary-color" />
    );

    const iconWhatsapp = (
        <WhatsappIcon
            width="42"
            className="mx-auto mb-2 stroke-secondary-color"
        />
    );

    const iconInstagram = (
        <InstagramIcon
            width="42"
            className="mx-auto mb-2 stroke-secondary-color"
        />
    );

    useEffect(() => {
        setHeight(props.tabContainerShipping.current.clientHeight);
    }, []);

    return (
        <>
            <h3 className="text-left text-xl">Tipo de orden:</h3>

            <FormInputRadio
                id="order-web"
                icon={iconWeb}
                label="Hacer orden vía sitio web"
                value="Web"
                {...props.register("orderType")}
            />

            <FormInputRadio
                id="order-whatsapp"
                icon={iconWhatsapp}
                label="Hacer orden vía Whatsapp"
                value="Whatsapp"
                {...props.register("orderType")}
            />

            <FormInputRadio
                id="order-instagram"
                icon={iconInstagram}
                label="Hacer orden vía Instagram"
                value="Instagram"
                {...props.register("orderType")}
            />
        </>
    );
};

export default StepOrder;
