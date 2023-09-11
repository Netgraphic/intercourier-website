import { useContext, useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import {
    faCircleQuestion,
    faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

import { FormWizardContext } from "../../context/FormWizardProvider";
import Confirmation from "./Confirmation";
import Success from "./Success";

const ModalConfirmShipping = (props) => {
    const { propsModal } = useContext(FormWizardContext);
    const [confirmSubmit, setConfirmSubmit] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const checkSubmission = async () => {
        try {
            setFormSubmitted(false);
            await props.handleSubmit();
        } catch (error) {
            console.log(error);
        } finally {
            setFormSubmitted(true);
        }
    };

    useEffect(() => {
        if (confirmSubmit) {
            checkSubmission();
        }
    }, [confirmSubmit]);

    return (
        <Modal
            show={propsModal.openModal === "confirmShipping"}
            onClose={() => propsModal.setOpenModal(undefined)}
        >
            {!formSubmitted ? (
                <Confirmation
                    icon={faCircleQuestion}
                    setConfirmSubmit={setConfirmSubmit}
                />
            ) : (
                <Success
                    icon={faThumbsUp}
                    getValues={props.getValues}
                    tabContainerShipping={props.tabContainerShipping}
                    formWizardRef={props.formWizardRef}
                    reset={props.reset}
                    setConfirmSubmit={setConfirmSubmit}
                    setFormSubmitted={setFormSubmitted}
                />
            )}
        </Modal>
    );
};

export default ModalConfirmShipping;
