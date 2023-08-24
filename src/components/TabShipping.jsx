import { forwardRef, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

import StepOrder from "./steps/StepOrder";
import StepSender from "./steps/StepSender";
import StepRecipient from "./steps/StepRecipient";
import StepPackage from "./steps/StepPackage";
import StepPayment from "./steps/StepPayment";
import StepSummary from "./steps/StepSummary";

import { comunasSantiago } from "../utilities/comunas";
import { pricePackages } from "../utilities/pricePackages";
import { format } from "date-fns";

const TabShipping = forwardRef(({ tab }, tabContainerShipping) => {
    const date = new Date();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setError,
        clearErrors,
        setValue,
        getValues,
    } = useForm({
        defaultValues: {
            orderType: "Web",
            fullnameSender: "",
            addressSender: "",
            zoneSender: "",
            comunaSender: "",
            emailSender: "",
            fullnameRecipient: "",
            addressRecipient: "",
            zoneRecipient: "",
            comunaRecipient: "",
            emailRecipient: "",
            packageSize: "S",
            shippingPrice: pricePackages.sizeS,
            packageContents: "",
            expressDelivery: false,
            customDeliveryTime: false,
            deliveryDate: date.setDate(date.getDate() + 2),
            paymentMethod: "Online",
        },
    });

    const [
        fullnameSender,
        addressSender,
        zoneSender,
        comunaSender,
        emailSender,
        fullnameRecipient,
        addressRecipient,
        zoneRecipient,
        comunaRecipient,
        emailRecipient,
        packageContents,
        expressDelivery,
        customDeliveryTime,
    ] = watch([
        "fullnameSender",
        "addressSender",
        "zoneSender",
        "comunaSender",
        "emailSender",
        "fullnameRecipient",
        "addressRecipient",
        "zoneRecipient",
        "comunaRecipient",
        "emailRecipient",
        "packageContents",
        "expressDelivery",
        "customDeliveryTime",
    ]);

    const [orderValue, setOrderValue] = useState("Web");

    useEffect(() => {
        if (localStorage.getItem("deliveryDate") !== null) {
            localStorage.setItem("deliveryDate", date);
        }

        switch (orderValue) {
            case "Whatsapp":
                window.location.href = "whatsapp://send?phone=56941347790";
                break;

            case "Instagram":
                window.location.href =
                    "https://www.instagram.com/intercourierchile/";
                break;

            default:
                break;
        }
    }, [orderValue]);

    const formWizardRef = useRef(null);

    const validateEmail = (emailSender) => {
        return emailSender.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const checkEmail = () => {
        if (!validateEmail(emailSender)) {
            return false;
        }

        return true;
    };

    const checkValidateTabSender = () => {
        let validEmail = checkEmail();

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

    const errorMessagesSender = () => {
        let validEmail = checkEmail();

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

    const checkValidateTabRecipient = () => {
        let validEmail = checkEmail();

        if (
            fullnameRecipient === "" ||
            addressRecipient === "" ||
            zoneRecipient === "" ||
            comunaRecipient === "" ||
            emailRecipient === "" ||
            !validEmail
        ) {
            return false;
        }

        return true;
    };

    const errorMessagesRecipient = () => {
        let validEmail = checkEmail();

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

        if (zoneRecipient === "") {
            setError("zoneRecipient", {
                type: "custom",
                message: "Campo obligatorio",
            });
        }

        if (comunaRecipient === "") {
            setError("comunaRecipient", {
                type: "custom",
                message: "Campo obligatorio",
            });
        }

        if (emailRecipient === "") {
            setError("emailRecipient", {
                type: "custom",
                message: "Campo obligatorio",
            });
        }

        if (emailRecipient !== "" && !validEmail) {
            setError("emailRecipient", {
                type: "custom",
                message: "Formato de email incorrecto",
            });
        }
    };

    const checkValidateTabPackage = () => {
        if (packageContents === "") {
            return false;
        }

        return true;
    };

    const errorMessagesPackage = () => {
        if (packageContents === "") {
            setError("packageContents", {
                type: "custom",
                message: "Campo obligatorio",
            });
        }
    };

    const onSubmit = (data) => {
        //Save the date in the right format
        let date = format(getValues("deliveryDate"), "dd/MM/yyyy");
        data.deliveryDate = date;
        console.log(data);
    };

    const backTemplate = () => {
        const handlePrevious = () => {
            let scrollDiv = tabContainerShipping.current.offsetTop + 250;
            window.scrollTo({ top: scrollDiv, behavior: "smooth" });
            clearErrors();
            formWizardRef.current?.prevTab();
        };
        return (
            <button
                type="button"
                className="mr-4 rounded-3xl border-2 border-main-color px-8 py-2 text-main-color"
                onClick={handlePrevious}
            >
                Anterior
            </button>
        );
    };

    const nextTemplate = () => {
        const handleNext = () => {
            let scrollDiv = tabContainerShipping.current.offsetTop + 250;
            window.scrollTo({ top: scrollDiv, behavior: "smooth" });
            clearErrors();
            formWizardRef.current?.nextTab();
        };

        return (
            orderValue === "Web" && (
                <button
                    type="button"
                    className="rounded-3xl border-2 border-main-color bg-main-color px-8 py-2 text-white"
                    onClick={handleNext}
                >
                    Siguiente
                </button>
            )
        );
    };

    const finishTemplate = () => {
        return (
            <button
                type="submit"
                className="rounded-3xl border-2 border-main-color bg-main-color px-8 py-2 text-white"
            >
                Finalizar
            </button>
        );
    };

    return (
        <div
            className={`container absolute top-0 px-5 transition-all duration-200 ease-in-out ${
                tab === 2 ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            <div
                ref={tabContainerShipping}
                className="container relative -top-8 mx-auto rounded-xl bg-white px-5"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormWizard
                        ref={formWizardRef}
                        stepSize="xs"
                        color="#d15e49"
                        backButtonTemplate={backTemplate}
                        nextButtonTemplate={nextTemplate}
                        finishButtonTemplate={finishTemplate}
                    >
                        <FormWizard.TabContent>
                            <StepOrder
                                tabContainerShipping={tabContainerShipping}
                                register={register}
                                setOrderValue={setOrderValue}
                            />
                        </FormWizard.TabContent>

                        <FormWizard.TabContent>
                            <StepSender
                                tabContainerShipping={tabContainerShipping}
                                register={register}
                                errors={errors}
                                setError={setError}
                                clearErrors={clearErrors}
                                comunasSantiago={comunasSantiago}
                                setValue={setValue}
                                getValues={getValues}
                                validateEmail={validateEmail}
                            />
                        </FormWizard.TabContent>

                        <FormWizard.TabContent
                            /* isValid={checkValidateTabSender()} */
                            validationError={errorMessagesSender}
                        >
                            <StepRecipient
                                tabContainerShipping={tabContainerShipping}
                                register={register}
                                errors={errors}
                                setError={setError}
                                clearErrors={clearErrors}
                                comunasSantiago={comunasSantiago}
                                setValue={setValue}
                                getValues={getValues}
                                validateEmail={validateEmail}
                            />
                        </FormWizard.TabContent>

                        <FormWizard.TabContent
                            /* isValid={checkValidateTabRecipient()} */
                            validationError={errorMessagesRecipient}
                        >
                            <StepPackage
                                tabContainerShipping={tabContainerShipping}
                                register={register}
                                errors={errors}
                                getValues={getValues}
                                setValue={setValue}
                                expressDelivery={expressDelivery}
                                customDeliveryTime={customDeliveryTime}
                            />
                        </FormWizard.TabContent>

                        <FormWizard.TabContent
                            /* isValid={checkValidateTabPackage()} */
                            validationError={errorMessagesPackage}
                        >
                            <StepPayment
                                tabContainerShipping={tabContainerShipping}
                                register={register}
                                getValues={getValues}
                            />
                        </FormWizard.TabContent>

                        <FormWizard.TabContent>
                            <StepSummary
                                tabContainerShipping={tabContainerShipping}
                                getValues={getValues}
                            />
                        </FormWizard.TabContent>
                    </FormWizard>
                </form>
            </div>
        </div>
    );
});

export default TabShipping;
