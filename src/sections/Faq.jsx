import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
    const AccordionItem = ({ header, ...props }) => (
        <Item
            {...props}
            header={({ state: { isEnter } }) => (
                <>
                    {header}
                    <FontAwesomeIcon
                        className={`ml-auto transition-transform duration-200 ease-in-out ${
                            isEnter && "rotate-180"
                        }`}
                        icon={isEnter ? faMinus : faPlus}
                    />
                </>
            )}
            className="mb-3 rounded-xl bg-white"
            buttonProps={{
                className:
                    "flex items-center w-full text-left text-base px-5 py-3 leading-tight md:p-6 md:text-xl",
            }}
            contentProps={{
                className:
                    "transition-height duration-200 ease-out px-5 text-gray-500 leading-tight md:text-lg md:px-6",
            }}
            panelProps={{
                className: "pb-5",
            }}
        />
    );

    return (
        <section id="faq" className="container mx-auto mt-16 px-10 md:w-3/5">
            <h2 className="mb-5 text-2xl text-title-color md:text-4xl">
                Preguntas Frecuentes
            </h2>

            <Accordion transition transitionTimeout={200}>
                <AccordionItem header="¿Puedo cambiar la dirección de entrega de mi paquete?">
                    <p className="leading-tight">
                        Es posible cambiar la dirección de entrega
                        contactándonos mediante email, Instagram o Whatsapp, e
                        indicando los datos de su envío.
                    </p>
                </AccordionItem>

                <AccordionItem header="¿Cómo puedo rastrear mi envío?">
                    <p className="mb-1.5 leading-tight">
                        Una vez recibida la orden de envío, recibirá un email
                        que incluirá su código de seguimiento. Éste código lo
                        puede ingresar directamente en el buscador de nuestro
                        sitio web, dentro de la sección de "Rastrear envío" y
                        será derivado a una vista con los detalles.
                    </p>
                    <p className="leading-tight">
                        También puede rastrear su envío a través de nuestra
                        plataforma externa, en los emails que le llegarán con
                        cada actualizacion .
                    </p>
                </AccordionItem>

                <AccordionItem header="¿Cuál es el peso máximo permitido por paquete?">
                    <p className="leading-tight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse sit amet nibh id justo placerat faucibus.
                        Etiam malesuada, urna non auctor luctus, tortor tellus
                        molestie justo, vitae vulputate elit tortor in dui.
                    </p>
                </AccordionItem>

                <AccordionItem header="¿Puedo reprogramar una entrega?">
                    <p className="leading-tight">
                        En el caso de que necesite reprogramar su entrega, puede
                        hacerlo contactándonos mediante email, Instagram o
                        Whatsapp.
                    </p>
                </AccordionItem>
            </Accordion>
        </section>
    );
};

export default Faq;
