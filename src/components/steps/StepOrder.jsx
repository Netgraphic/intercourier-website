import { useContext, useEffect } from "react";
import { FormWizardContext } from "../../context/FormWizardProvider";

import WebIcon from "../icons/WebIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import InstagramIcon from "../icons/InstagramIcon";

import FormInputRadio from "./fields/FormInputRadio";

const StepOrder = (props) => {
    const { setHeight } = useContext(FormWizardContext);

    const iconWeb = (
        <WebIcon width="42" className="mx-auto mb-2 stroke-secondary-color" />
    );

    const checkValue = (e) => {
        let value = e.target.value;

        switch (value) {
            case "Whatsapp":
                return (window.location.href =
                    "https://api.whatsapp.com/send?phone=56941347790");

            case "Instagram":
                return (window.location.href =
                    "https://www.instagram.com/intercourierchile/");

            default:
                return;
        }
    };

    useEffect(() => {
        setHeight(props.tabContainerShipping.current.clientHeight);
    }, []);

    return (
        <>
            <h3 className="mb-4 text-left text-xl">Tipo de orden:</h3>

            <div className="grid grid-cols-1 gap-4">
                <FormInputRadio
                    id="order-web"
                    icon={iconWeb}
                    label="Hacer orden vía sitio web"
                    value="Web"
                    {...props.register("orderType")}
                />

                <div className="w-full">
                    <input
                        id="order-whatsapp"
                        className="peer hidden"
                        type="radio"
                        name="orderType"
                        value="Whatsapp"
                        onChange={checkValue}
                    />
                    <label
                        htmlFor="order-whatsapp"
                        className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-secondary-color px-3 py-5 text-lg text-secondary-color peer-checked:bg-main-color peer-checked:text-white peer-checked:[&>div>span>svg]:stroke-white"
                    >
                        <div className="text-center">
                            <span className="text-7xl">
                                <WhatsappIcon
                                    width="42"
                                    className="mx-auto mb-2 stroke-secondary-color"
                                />
                            </span>
                            <div className="text-lg">
                                Hacer orden vía Whatsapp
                            </div>
                        </div>
                    </label>
                </div>

                <div className="w-full">
                    <input
                        id="order-instagram"
                        className="peer hidden"
                        type="radio"
                        name="orderType"
                        value="Instagram"
                        onChange={checkValue}
                    />
                    <label
                        htmlFor="order-instagram"
                        className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-secondary-color px-3 py-5 text-lg text-secondary-color peer-checked:bg-main-color peer-checked:text-white peer-checked:[&>div>span>svg]:stroke-white"
                    >
                        <div className="text-center">
                            <span className="text-7xl">
                                <InstagramIcon
                                    width="42"
                                    className="mx-auto mb-2 stroke-secondary-color"
                                />
                            </span>
                            <div className="text-lg">
                                Hacer orden vía Instagram
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
};

export default StepOrder;
