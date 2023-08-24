import FirstStepIcon from "../components/icons/FirstStepIcon";
import SecondStepIcon from "../components/icons/SecondStepIcon";
import ThirdStepIcon from "../components/icons/ThirdStepIcon";

const ShippingProcess = () => {
    return (
        <section
            id="shipping-process"
            className="container mx-auto mt-28 px-10"
        >
            <h2 className="mb-5 text-2xl text-title-color">Proceso de envío</h2>
            <ol>
                <li>
                    <FirstStepIcon width="200" />
                    Complete el formulario de envío en el sitio web o haciendo
                    su pedido a través de Whatsapp o Instagram.
                </li>
                <li>
                    Recogeremos su paquete directamente en su domicilio o
                    negocio.
                    <SecondStepIcon width="150" />
                </li>
                <li>
                    <ThirdStepIcon width="400" />
                    Su paquete será entregado en la dirección de destino al
                    siguiente día hábil o el mismo día en caso de seleccionar la
                    opción de "Envío express".
                </li>
            </ol>
        </section>
    );
};

export default ShippingProcess;
