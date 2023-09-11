import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";

const ErrorPayment = () => {
    return (
        <>
            <FontAwesomeIcon
                icon={faFaceFrown}
                className="mb-5 text-8xl text-main-color"
            />
            <h1 className="mb-5 text-4xl text-main-color">¡Oh no!</h1>
            <p className="leading-tight">
                La transacción fue rechazada. Intente nuevamente o seleccione un
                nuevo método de pago.
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

export default ErrorPayment;
