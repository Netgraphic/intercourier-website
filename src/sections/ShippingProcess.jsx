import FirstStepIcon from "../components/icons/FirstStepIcon";
import SecondStepIcon from "../components/icons/SecondStepIcon";
import ThirdStepIcon from "../components/icons/ThirdStepIcon";

const ShippingProcess = () => {
    return (
        <section id="shipping-process" className="container mt-28 px-10">
            <h2 className="mb-5 text-2xl text-title-color">Proceso de envío</h2>
            <ol>
                <li>
                    <FirstStepIcon />
                    Complete el formulario de envío en el sitio web.
                </li>
                <li>
                    Recogeremos su paquete directamente en su domicilio o
                    negocio.
                    <SecondStepIcon />
                </li>
                <li>
                    <ThirdStepIcon />
                    Su paquete será entregado en la dirección de destino.
                </li>
            </ol>
        </section>
    );
};

export default ShippingProcess;
