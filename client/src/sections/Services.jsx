import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRectangleList,
    faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

import { faCube } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <section
            id="services"
            className="relative mt-40 before:w-3/4 xl:before:w-1/2"
        >
            <ul className="relative [&>li:last-child]:pb-5">
                <li className="relative mt-16 bg-main-color pb-20 pt-5 text-white">
                    <div className="container mx-auto px-10 md:w-3/5">
                        <h2 className="mb-5 text-2xl md:text-4xl xl:mb-8">
                            Nuestros Servicios
                        </h2>
                        <h3 className="mb-1 text-xl md:mb-3 md:text-3xl">
                            Mensajería Express
                        </h3>
                        <p className="leading-tight md:text-lg md:leading-tight">
                            Transportamos documentos, cheques, contratos,
                            paquetería de todo tipo, en tiempos que van de 1-3
                            horas desde el retiro del encargo.
                        </p>
                    </div>
                </li>
                <li className="relative bg-secondary-color pb-20 pt-5 text-white">
                    <div className="container mx-auto px-10 text-right md:w-3/5">
                        <h3 className="mb-1 text-xl md:mb-3 md:text-3xl">
                            E-Commerce
                        </h3>
                        <p className="leading-tight md:text-lg md:leading-tight">
                            Potenciamos su comercio. Retiramos y transportamos a
                            gran parte de Santiago.
                        </p>
                    </div>
                </li>
                <li className="relative bg-main-color pb-20 pt-5 text-white">
                    <div className="container mx-auto px-10 md:w-3/5">
                        <h3 className="mb-1 text-xl md:mb-3 md:text-3xl">
                            Retiro de cheques y gestiones
                        </h3>
                        <p className="leading-tight md:text-lg md:leading-tight">
                            Retiramos cheques y documentos, también los
                            depositamos o entregamos en su oficina, trámites
                            bancarios, notariales, licencias u otras acciones
                            similares.
                        </p>
                    </div>
                </li>
                <li className="relative bg-secondary-color pb-20 pt-5 text-white">
                    <div className="container mx-auto px-10 text-right md:w-3/5">
                        <h3 className="mb-1 text-xl md:mb-3 md:text-3xl">
                            Delivery
                        </h3>
                        <p className="leading-tight md:text-lg md:leading-tight">
                            Consiste en el retiro, transporte y distribución de
                            documentos y encomiendas en tiempo planificado con
                            confirmación de entrega.
                        </p>
                    </div>
                </li>
            </ul>

            <section className="container mx-auto mt-32 px-10 md:w-3/5">
                <h4 className="mb-5 text-xl text-title-color md:text-3xl">
                    Protocolos de despacho
                </h4>
                <div className="grid grid-cols-1 gap-5 text-center xl:grid-cols-3">
                    <article className="rounded-xl border-4 border-main-color p-5 ">
                        <FontAwesomeIcon
                            icon={faRectangleList}
                            className="mx-auto mb-3 block text-5xl text-secondary-color"
                        />
                        <h5 className="mb-1 text-lg uppercase text-secondary-color">
                            Programación
                        </h5>
                        <p className="leading-tight">
                            Los clientes deben agendar los retiros en el
                            transcurso de la mañana entre las 9:00 y 12:00.
                        </p>
                    </article>
                    <article className="rounded-xl border-4 border-main-color p-5">
                        <FontAwesomeIcon
                            icon={faCube}
                            className="mx-auto mb-3 block text-5xl text-secondary-color"
                        />
                        <h5 className="mb-1 text-lg uppercase text-secondary-color">
                            Retiros
                        </h5>
                        <p className="leading-tight">
                            Nuestros conductores salen en ruta a recoger los
                            encargos entre las 12:00 y 14:00 horas.
                        </p>
                    </article>
                    <article className="rounded-xl border-4 border-main-color p-5">
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="mx-auto mb-3 block text-5xl text-secondary-color"
                        />
                        <h5 className="mb-1 text-lg uppercase text-secondary-color">
                            Despacho
                        </h5>
                        <p className="leading-tight">
                            Nuestros conductores salen a ruta de las 15:00 a
                            22:00 para la entrega de los encargos.
                        </p>
                    </article>
                </div>
            </section>
        </section>
    );
};

export default Services;
