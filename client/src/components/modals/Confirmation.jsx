import { useContext } from "react";
import { Modal, Spinner } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormWizardContext } from "../../context/FormWizardProvider";
import { pricePackages } from "../../utilities/pricePackages";

import { summary } from "../../utilities/summary";

const Confirmation = (props) => {
    const {
        bannerHeight,
        loading,
        setAgreeTerms,
        formatPrice,
        setPrice,
        setPaylink,
        setArrayOrders,
        setOrdersSubmitted,
        propsModal,
    } = useContext(FormWizardContext);

    const { fieldsSender, fieldsRecipient, fieldsPackage, fieldsPayment } =
        summary();

    const scrollDiv =
        props.tabContainerShipping.current.offsetTop + bannerHeight + 20;

    const newOrder = {
        fieldsSender: fieldsSender(props.getValues),
        fieldsRecipient: fieldsRecipient(props.getValues),
        fieldsPackage: fieldsPackage(props.getValues),
        fieldsPayment: fieldsPayment(props.getValues, formatPrice),
    };

    const addNewOrderFunctions = () => {
        setArrayOrders((prev) => [...prev, newOrder]);
        setOrdersSubmitted((prev) => [...prev, props.getValues()]);
        propsModal.setOpenModal(undefined);
        setAgreeTerms(false);
        setPaylink(undefined);
        setPrice({
            packageSize: "S",
            packagePrice: pricePackages.sizeS,
        });
        props.setConfirmSubmit(false);
        props.setFormSubmitted(false);
        props.formWizardRef.current?.reset();
        props.reset();
        window.scrollTo({
            top: scrollDiv,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6 text-gray-500 [&>p]:leading-tight">
                    <h3 className="text-center text-2xl text-secondary-color">
                        <FontAwesomeIcon
                            icon={props.icon}
                            className="mx-auto mb-2 block text-center"
                            size="4x"
                        />
                        ¿Desea confirmar su envío?
                    </h3>
                    <p>
                        Si necesita hacer cambios en su orden, puede cerrar esta
                        ventana para realizarlos.
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer className="flex-col justify-center gap-3 space-x-0 xl:flex-row">
                <button
                    type="button"
                    className="w-full rounded-3xl border-2 border-main-color px-8 py-4 leading-none text-main-color xl:mr-2 xl:w-32"
                    onClick={() => propsModal.setOpenModal(undefined)}
                >
                    Cancelar
                </button>
                <button
                    type="button"
                    className="w-full rounded-3xl border-2 border-secondary-color px-8 py-4 leading-none text-secondary-color xl:mr-2 xl:w-52 xl:py-4"
                    onClick={() => addNewOrderFunctions()}
                >
                    Agregar otro envío
                </button>
                <button
                    type="button"
                    className="w-full rounded-3xl border-2 border-main-color bg-main-color px-6 py-3 text-center leading-none text-white transition-all duration-200 ease-in-out hover:border-secondary-color hover:bg-secondary-color xl:w-32"
                    onClick={() => props.setConfirmSubmit(true)}
                >
                    {loading ? (
                        <Spinner className="h-6 w-6 fill-secondary-color p-0" />
                    ) : (
                        <span className="block py-1">Confirmar</span>
                    )}
                </button>
            </Modal.Footer>
        </>
    );
};

export default Confirmation;
