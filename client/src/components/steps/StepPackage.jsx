import { useContext, useEffect } from "react";
import { FormWizardContext } from "../../context/FormWizardProvider";
import { pricePackages } from "../../utilities/pricePackages";

import FormInputRadio from "./fields/FormInputRadio";
import FormTextArea from "./fields/FormTextArea";
import FormError from "./fields/FormError";
import FormDatepicker from "./fields/FormDatepicker";
import FormToggle from "./fields/FormToggle";
import ShippingPrice from "../ShippingPrice";
import FormInputHidden from "./fields/FormInputHidden";
import FormInputText from "./fields/FormInputText";

const StepPackage = (props) => {
    const { setHeight, price, setPrice, formatPrice } =
        useContext(FormWizardContext);

    const updateShippingPrice = (packageSize) => {
        switch (packageSize) {
            case "S":
                setPrice({ ...price, packagePrice: pricePackages.sizeS });
                break;

            case "M":
                setPrice({ ...price, packagePrice: pricePackages.sizeM });
                break;

            case "L":
                setPrice({ ...price, packagePrice: pricePackages.sizeL });
                break;

            case "XL":
                setPrice({ ...price, packagePrice: pricePackages.sizeXL });
                break;

            default:
                setPrice({ ...price, packagePrice: pricePackages.sizeS });
        }
    };

    useEffect(() => {
        props.setValue("shippingPrice", price.packagePrice);
        setHeight(props.tabContainerShipping.current.clientHeight);
    }, [price]);

    return (
        <>
            <h3 className="mb-4 text-left text-xl">Información del paquete:</h3>

            <p className="mb-3 rounded-md bg-secondary-color p-2 text-sm leading-tight text-white">
                <span className="block uppercase">Importante:</span> Asegúrese
                de empacar el producto correctamente antes de hacer el envío.
            </p>

            <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                <FormInputRadio
                    id="size-s"
                    icon="S"
                    label="Tamaño máximo: 20 x 10 x 10 cm"
                    label2="Peso máximo: 2 Kg"
                    value="S"
                    {...props.register("packageSize", {
                        onChange: (e) => {
                            updateShippingPrice(e.target.value);
                        },
                    })}
                />

                <FormInputRadio
                    id="size-m"
                    icon="M"
                    label="Tamaño máximo: 60 x 40 x 10 cm"
                    label2="Peso máximo: 6 Kg"
                    value="M"
                    {...props.register("packageSize", {
                        onChange: (e) => {
                            updateShippingPrice(e.target.value);
                        },
                    })}
                />

                <FormInputRadio
                    id="size-l"
                    icon="L"
                    label="Tamaño máximo: 60 x 40 x 10 cm"
                    label2="Peso máximo: 8 Kg"
                    value="L"
                    {...props.register("packageSize", {
                        onChange: (e) => {
                            updateShippingPrice(e.target.value);
                        },
                    })}
                />

                <FormInputRadio
                    id="size-xl"
                    icon="XL"
                    label="Tamaño máximo: 60 x 40 x 10 cm"
                    label2="Peso máximo: 10 Kg"
                    value="XL"
                    {...props.register("packageSize", {
                        onChange: (e) => {
                            updateShippingPrice(e.target.value);
                        },
                    })}
                />

                <FormInputHidden {...props.register("shippingPrice")} />
            </div>

            <FormTextArea
                id="packageContents"
                label="Declaración de contenido"
                placeholder="Ingrese contenidos del paquete..."
                required="true"
                {...props.register("packageContents")}
            >
                <FormError error={props.errors.packageContents} />
            </FormTextArea>

            <FormInputText
                id="packageValue"
                label="Valor declarado"
                type="number"
                placeholder="Ingrese valor del contenido"
                required="true"
                {...props.register("packageValue")}
            >
                <FormError error={props.errors.packageValue} />
            </FormInputText>

            <p className="mb-2 mt-4 leading-tight">
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
                <div>
                    <FormToggle
                        label="Envío programado"
                        {...props.register("customDeliveryTime")}
                    />
                </div>
            )}

            {props.customDeliveryTime && (
                <div>
                    <FormDatepicker
                        setValues={props.setValue}
                        {...props.register("deliveryDate")}
                    />
                </div>
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

            <ShippingPrice price={formatPrice(price.packagePrice)} />
        </>
    );
};

export default StepPackage;
