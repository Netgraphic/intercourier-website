import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "flowbite-react";
import emailjs from "@emailjs/browser";

import { FormWizardContext } from "../../context/FormWizardProvider";
import { formValidate } from "../../utilities/formValidate";

import FormInputText from "../steps/fields/FormInputText";
import FormTextArea from "../steps/fields/FormTextArea";
import FormError from "../steps/fields/FormError";
import FormInputHidden from "../steps/fields/FormInputHidden";
import ButtonLoading from "../ButtonLoading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckDouble,
    faExclamation,
} from "@fortawesome/free-solid-svg-icons";

const ModalContact = () => {
    const { propsModal } = useContext(FormWizardContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            to_name: "Intercourier",
        },
    });

    const { required, patternEmail } = formValidate();
    const [loading, setLoading] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = async (formData) => {
        try {
            setLoading(true);
            await emailjs.send(
                "service_38kzxd8",
                "template_0sn0q4m",
                formData,
                "4v7ewdebI9d1xDgg7"
            );

            console.log("Mensaje enviado exitosamente");
        } catch (error) {
            console.log(error);
            setError("Se ha producido un error. Intente nuevamente.");
            setMailSent(false);
        } finally {
            setLoading(false);
            setMailSent(true);
        }
    };

    const obSubmit = (data) => {
        sendEmail(data);
        reset();
    };

    return (
        <Modal
            show={propsModal.openModal === "contact"}
            size="md"
            popup
            onClose={() => {
                propsModal.setOpenModal(undefined);
                setMailSent(false);
                setError(null);
            }}
        >
            <Modal.Header />
            <Modal.Body>
                <form onSubmit={handleSubmit(obSubmit)} noValidate>
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        ¿Tiene alguna duda? ¡Escríbanos!
                    </h3>
                    <div>
                        <FormInputText
                            id="user_name"
                            label="Nombre"
                            type="text"
                            placeholder="Ingrese su nombre"
                            required="true"
                            {...register("user_name", {
                                required,
                            })}
                        >
                            <FormError error={errors.user_name} />
                        </FormInputText>
                    </div>
                    <div>
                        <FormInputText
                            id="user_email"
                            label="Email"
                            type="email"
                            placeholder="Ingrese su email"
                            required="true"
                            {...register("user_email", {
                                required,
                                pattern: patternEmail,
                            })}
                        >
                            <FormError error={errors.user_email} />
                        </FormInputText>
                    </div>
                    <div>
                        <FormTextArea
                            id="message"
                            label="Mensaje"
                            placeholder="Ingrese su mensaje..."
                            required="true"
                            {...register("message", {
                                required,
                            })}
                        >
                            <FormError error={errors.message} />
                        </FormTextArea>
                    </div>
                    <p className="mb-5">
                        <span className="mr-1 text-secondary-color">(*)</span>
                        Campos obligatorios
                    </p>
                    <div className="w-full">
                        {error && (
                            <p className="mb-5 text-secondary-color">
                                <FontAwesomeIcon
                                    icon={faExclamation}
                                    className="mr-1"
                                />
                                {error}
                            </p>
                        )}
                        {mailSent && (
                            <p className="mb-5 text-secondary-color">
                                <FontAwesomeIcon
                                    icon={faCheckDouble}
                                    className="mr-1"
                                />
                                Mensaje enviado exitosamente
                            </p>
                        )}

                        {loading ? (
                            <ButtonLoading />
                        ) : (
                            <button
                                type="submit"
                                className="rounded-3xl border-2 border-main-color bg-main-color px-8 py-2 text-white"
                            >
                                Enviar mensaje
                            </button>
                        )}
                    </div>
                    <FormInputHidden {...register("to_name")} />
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalContact;
