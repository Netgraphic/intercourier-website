import { useContext } from "react";
import { Modal } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormWizardContext } from "../../context/FormWizardProvider";

const Success = (props) => {
    if (props.tabContainerShipping.current === null) {
        return;
    }

    const { propsModal, setAgreeTerms } = useContext(FormWizardContext);
    const scrollDiv = props.tabContainerShipping.current.offsetTop + 250;

    return (
        <>
            <Modal.Body>
                <div className="space-y-6 text-gray-500 [&>p]:leading-tight">
                    <h3 className="text-center text-2xl text-secondary-color">
                        <FontAwesomeIcon
                            icon={props.icon}
                            className="mx-auto mb-2 block text-center"
                            size="4x"
                        />
                        ¡Todo listo!
                    </h3>
                    <p>
                        Su envío ha sido generado exitosamente. Pronto recibirá
                        un email con los detalles de su orden.
                    </p>

                    {props.getValues("paymentMethod") ===
                        "Tarjeta (Pago presencial)" && (
                        <p>
                            Recuerde tener su tarjeta de débito/crédito a mano
                            cuando vayamos a recoger su paquete y pueda realizar
                            el pago.
                        </p>
                    )}

                    {props.getValues("paymentMethod") === "Transferencia" && (
                        <>
                            <p>
                                Para poder procesar su orden, realice su pago a
                                la siguiente cuenta bancaria:
                            </p>
                            <ul className="text-gray-800">
                                <li className="uppercase">
                                    Sociedad de inversiones jm spa
                                </li>
                                <li>RUT: 77.289.443-0</li>
                                <li className="uppercase">
                                    Cuenta corriente Banco Itau
                                </li>
                                <li>Número: 0221341785</li>
                                <li>Email: pagos@intercourier.cl</li>
                            </ul>
                        </>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer className="justify-center">
                <button
                    type="button"
                    className="mr-2 rounded-3xl border-2 border-main-color px-8 py-2 leading-none text-main-color"
                    onClick={() => {
                        propsModal.setOpenModal(undefined);
                        setAgreeTerms(false);
                        props.setConfirmSubmit(false);
                        props.setFormSubmitted(false);
                        props.formWizardRef.current?.reset();
                        props.reset();
                        window.scrollTo({
                            top: scrollDiv,
                            behavior: "smooth",
                        });
                    }}
                >
                    Hacer otro envío
                </button>
                <a
                    href="./"
                    className="cursor-pointer rounded-3xl border-2 border-main-color bg-main-color px-6 py-2 text-center leading-none text-white transition-all duration-200 ease-in-out hover:bg-secondary-color"
                >
                    Volver al inicio
                </a>
            </Modal.Footer>
        </>
    );
};

export default Success;
