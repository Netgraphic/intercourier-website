import { forwardRef, useRef } from "react";
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

const TabShipping = forwardRef(({ tab }, tabContainerShipping) => {
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
    ]);

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

    const onSubmit = (data) => console.log(data);

    const backTemplate = (handlePrevious) => {
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
            clearErrors();
            formWizardRef.current?.nextTab();
        };

        return (
            <button
                type="button"
                className="rounded-3xl border-2 border-main-color bg-main-color px-8 py-2 text-white"
                onClick={handleNext}
            >
                Siguiente
            </button>
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
                            isValid={checkValidateTabSender()}
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
                            isValid={checkValidateTabRecipient()}
                            validationError={errorMessagesRecipient}
                        >
                            <StepPackage
                                tabContainerShipping={tabContainerShipping}
                                register={register}
                            />
                        </FormWizard.TabContent>

                        <FormWizard.TabContent>
                            <StepPayment
                                tabContainerShipping={tabContainerShipping}
                                register={register}
                            />
                        </FormWizard.TabContent>

                        <FormWizard.TabContent>
                            <StepSummary />
                        </FormWizard.TabContent>
                    </FormWizard>
                </form>
            </div>
        </div>
    );
});

export default TabShipping;
