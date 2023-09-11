import { useContext } from "react";
import { Modal } from "flowbite-react";
import { FormWizardContext } from "../../context/FormWizardProvider";

const ModalTracking = ({ handleSubmit }) => {
    const { propsModal } = useContext(FormWizardContext);

    return (
        <Modal
            show={propsModal.openModal === "checkTracking"}
            onClose={() => propsModal.setOpenModal(undefined)}
        >
            <Modal.Header>Rastrear envío</Modal.Header>
            <Modal.Body>
                <div className="space-y-3 text-gray-500 [&>p]:leading-tight">
                    <p>
                        No aceptamos envíos por pagar, todos los envíos deben
                        ser anteriormente cancelados por nuestros clientes
                        directos.
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer className="justify-center">
                <button
                    type="button"
                    className="rounded-3xl bg-main-color px-6 py-2 text-white transition-all duration-200 ease-in-out hover:bg-secondary-color"
                    onClick={() => propsModal.setOpenModal(undefined)}
                >
                    Cerrar
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalTracking;
