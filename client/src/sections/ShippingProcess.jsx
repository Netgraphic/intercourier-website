import FirstStepIcon from "../components/icons/FirstStepIcon";
import SecondStepIcon from "../components/icons/SecondStepIcon";
import ThirdStepIcon from "../components/icons/ThirdStepIcon";

const ShippingProcess = () => {
    return (
        <section
            id="shipping-process"
            className="container mx-auto mt-[290px] px-10 md:mt-[480px] md:w-3/5 xl:mt-[620px]"
        >
            <h2 className="mb-8 text-2xl text-title-color md:text-4xl">
                Proceso de envío
            </h2>
            <ol>
                <li className="md:text-2xl">
                    <FirstStepIcon width="200" />
                    Complete el formulario de envío en el sitio web o haciendo
                    su pedido a través de Whatsapp o Instagram.
                </li>
                <li className="md:text-2xl">
                    Recogeremos su paquete directamente en su domicilio o
                    negocio. Asegúrese de empacar el producto correctamente
                    antes de hacer el envío.
                    <SecondStepIcon width="350" />
                </li>
                <li className="md:text-2xl">
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
