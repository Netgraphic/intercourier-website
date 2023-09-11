import { useContext } from "react";
import { Modal, Spinner } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormWizardContext } from "../../context/FormWizardProvider";

const Confirmation = (props) => {
    const { loading, propsModal } = useContext(FormWizardContext);

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
            <Modal.Footer className="justify-center">
                <button
                    type="button"
                    className="mr-2 w-32 rounded-3xl border-2 border-main-color px-8 py-4 leading-none text-main-color"
                    onClick={() => propsModal.setOpenModal(undefined)}
                >
                    Cancelar
                </button>
                <button
                    type="button"
                    className="w-32 rounded-3xl border-2 border-main-color bg-main-color px-6 py-3 text-center leading-none text-white transition-all duration-200 ease-in-out hover:border-secondary-color hover:bg-secondary-color"
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
