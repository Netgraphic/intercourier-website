import { useContext, useEffect } from "react";
import { FormWizardContext } from "../../context/FormWizardProvider";

import FormInputRadio from "./fields/FormInputRadio";
import FormTextArea from "./fields/FormTextArea";
import FormError from "./fields/FormError";
import FormDatepicker from "./fields/FormDatepicker";
import FormToggle from "./fields/FormToggle";

const StepPackage = (props) => {
    const { setHeight } = useContext(FormWizardContext);

    useEffect(() => {
        setHeight(props.tabContainerShipping.current.clientHeight);
    }, []);

    return (
        <>
            <h3 className="mb-4 text-left text-xl">Información del paquete:</h3>

            <div className="mb-4 grid grid-cols-2 gap-4">
                <FormInputRadio
                    id="size-s"
                    icon="S"
                    label="Tamaño máximo: 20 x 10 x 10 cm"
                    label2="Peso máximo: 2 Kg"
                    value="S"
                    {...props.register("packageSize")}
                />

                <FormInputRadio
                    id="size-m"
                    icon="M"
                    label="Tamaño máximo: 60 x 40 x 10 cm"
                    label2="Peso máximo: 6 Kg"
                    value="M"
                    {...props.register("packageSize")}
                />

                <FormInputRadio
                    id="size-l"
                    icon="L"
                    label="Tamaño máximo: 60 x 40 x 10 cm"
                    label2="Peso máximo: 8 Kg"
                    value="L"
                    {...props.register("packageSize")}
                />

                <FormInputRadio
                    id="size-xl"
                    icon="XL"
                    label="Tamaño máximo: 60 x 40 x 10 cm"
                    label2="Peso máximo: 10 Kg"
                    value="XL"
                    {...props.register("packageSize")}
                />
            </div>

            <FormTextArea
                label="Declaración de contenido"
                id="package-contents"
                placeholder="Ingrese contenidos del paquete..."
                required="true"
                {...props.register("packageContents")}
            >
                <FormError error={props.errors.packageContents} />
            </FormTextArea>

            <p className="mb-2 leading-tight">
                Por defecto, los envíos se realizan al siguiente día hábil. Si
                necesita que su envío se realice el mismo día, active la opción{" "}
                <span className="text-secondary-color">Envío express.</span>
            </p>

            <p className="mb-5 leading-tight">
                Tambíén puede programar su envío para la fecha que estime
                conveniente.
            </p>

            {!props.customDeliveryTime && (
                <FormToggle
                    label="Envío express"
                    {...props.register("expressDelivery")}
                />
            )}

            {!props.expressDelivery && (
                <FormToggle
                    label="Envío programado"
                    {...props.register("customDeliveryTime")}
                />
            )}

            {props.customDeliveryTime && (
                <FormDatepicker
                    setValues={props.setValue}
                    {...props.register("deliveryDate")}
                />
            )}

            <FormTextArea
                label="Observaciones"
                id="observations"
                placeholder="¿Tiene alguna observación?"
                {...props.register("observations")}
            />

            <p className="mt-2">
                <span className="mr-1 text-secondary-color">(*)</span>Campos
                obligatorios
            </p>

            <div className="mb-2 mt-8 w-full border-t-2 border-secondary-color pt-2 text-2xl text-secondary-color">
                Total envío: <span>$10.000</span>
            </div>
        </>
    );
};

export default StepPackage;
