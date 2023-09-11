import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const PendingPayment = () => {
    return (
        <>
            <FontAwesomeIcon
                icon={faClock}
                className="mb-5 text-8xl text-main-color"
            />
            <h1 className="mb-5 text-4xl text-main-color">Pago pendiente</h1>
            <p className="leading-tight">
                La transacción está pendiente de pago.
            </p>

            <Link
                to="/"
                className="mx-auto mt-8 block w-36 rounded-full bg-main-color p-3 text-white transition-all duration-200 ease-in-out hover:bg-secondary-color"
            >
                Volver al inicio
            </Link>
        </>
    );
};

export default PendingPayment;
