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
                        className={`ml-5 transition-transform duration-200 ease-in-out ${
                            isEnter && "rotate-180"
                        }`}
                        icon={isEnter ? faMinus : faPlus}
                    />
                </>
            )}
            className="mb-3 rounded-xl bg-white"
            buttonProps={{
                className:
                    "flex items-center w-full text-left text-base px-5 py-3 leading-tight",
            }}
            contentProps={{
                className:
                    "transition-height duration-200 ease-out px-5 text-gray-500 leading-tight",
            }}
            panelProps={{
                className: "pb-5",
            }}
        />
    );

    return (
        <section id="faq" className="container mt-16 px-10">
            <h2 className="mb-5 text-2xl text-title-color">
                Preguntas Frecuentes
            </h2>

            <Accordion transition transitionTimeout={200}>
                <AccordionItem header="¿Puedo cambiar la dirección de entrega de mi paquete?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse sit amet nibh id justo placerat faucibus. Etiam
                    malesuada, urna non auctor luctus, tortor tellus molestie
                    justo, vitae vulputate elit tortor in dui.
                </AccordionItem>

                <AccordionItem header="¿Cómo puedo hacer seguimiento a mi envío?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse sit amet nibh id justo placerat faucibus. Etiam
                    malesuada, urna non auctor luctus, tortor tellus molestie
                    justo, vitae vulputate elit tortor in dui.
                </AccordionItem>

                <AccordionItem header="¿Cuál es el peso máximo permitido por paquete?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse sit amet nibh id justo placerat faucibus. Etiam
                    malesuada, urna non auctor luctus, tortor tellus molestie
                    justo, vitae vulputate elit tortor in dui.
                </AccordionItem>

                <AccordionItem header="¿Puedo reprogramar una entrega?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse sit amet nibh id justo placerat faucibus. Etiam
                    malesuada, urna non auctor luctus, tortor tellus molestie
                    justo, vitae vulputate elit tortor in dui.
                </AccordionItem>
            </Accordion>
        </section>
    );
};

export default Faq;
