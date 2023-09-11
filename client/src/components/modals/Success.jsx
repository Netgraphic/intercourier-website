import { useContext, useEffect, useState } from "react";
import { Modal, Spinner } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormWizardContext } from "../../context/FormWizardProvider";
import { flow } from "../../utilities/flow";

const Success = (props) => {
    if (props.tabContainerShipping.current === null) {
        return;
    }

    const { bannerHeight, propsModal, setAgreeTerms, setPrice } =
        useContext(FormWizardContext);
    const { createOrder } = flow();
    const scrollDiv =
        props.tabContainerShipping.current.offsetTop + bannerHeight + 20;
    const [payLink, setPaylink] = useState();
    const [loading, setLoading] = useState(false);

    const getPaylink = async () => {
        try {
            setLoading(true);
            const data = await createOrder(
                props.getValues("emailSender"),
                props.getValues("shippingPrice")
            );

            setPaylink(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (props.getValues("paymentMethod") === "Online") {
            getPaylink();
        }
    }, []);

    console.log(`loading: ${loading}, payLink: ${payLink}`);

    return (
        <>
            <Modal.Body>
                <div className="text-gray-500 [&>p]:leading-tight">
                    <h3 className="mb-5 text-center text-2xl text-secondary-color">
                        <FontAwesomeIcon
                            icon={props.icon}
                            className="mx-auto mb-2 block text-center"
                            size="4x"
                        />
                        ¡Todo listo!
                    </h3>
                    <p className="mb-5 text-center">
                        Su envío ha sido generado exitosamente. Pronto recibirá
                        un email con los detalles de su orden.
                    </p>

                    {props.getValues("paymentMethod") === "Online" && (
                        <>
                            {loading || payLink === undefined ? (
                                <>
                                    <p className="mb-2 text-center">
                                        Generando botón de pago...
                                    </p>
                                    <div className="mx-auto w-6">
                                        <Spinner className="h-6 w-6 fill-secondary-color p-0" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="mb-4 text-center">
                                        Realice su pago online haciendo click en
                                        el siguiente botón.
                                    </p>
                                    <a
                                        href={payLink}
                                        target="_blank"
                                        className="mx-auto block w-40 rounded-3xl bg-main-color px-8 py-2 text-center text-white"
                                    >
                                        Pagar
                                    </a>
                                </>
                            )}
                        </>
                    )}

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
                    className="mr-2 rounded-3xl border-2 border-main-color px-8 py-2 leading-none text-main-color md:py-4"
                    onClick={() => {
                        propsModal.setOpenModal(undefined);
                        setAgreeTerms(false);
                        setPaylink(undefined);
                        setPrice({ packageSize: "S", packagePrice: 2000 });
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
                    className="cursor-pointer rounded-3xl border-2 border-main-color bg-main-color px-6 py-2 text-center leading-none text-white transition-all duration-200 ease-in-out hover:bg-secondary-color md:py-4"
                >
                    Volver al inicio
                </a>
            </Modal.Footer>
        </>
    );
};

export default Success;
