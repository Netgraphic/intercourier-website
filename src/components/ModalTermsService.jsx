import { Button, Modal } from "flowbite-react";

const ModalTermsService = ({ props }) => {
    return (
        <Modal
            show={props.openModal === "termsConditions"}
            onClose={() => props.setOpenModal(undefined)}
        >
            <Modal.Header>Términos y Condiciones</Modal.Header>
            <Modal.Body>
                <div className="space-y-3 text-gray-500 [&>p]:leading-tight">
                    <p>
                        No aceptamos envíos por pagar, todos los envíos deben
                        ser anteriormente cancelados por nuestros clientes
                        directos.
                    </p>
                    <p>
                        Una vez agendadas y/o canceladas las encomiendas se da
                        por hecho la aceptación con conformidad de los términos
                        y condiciones con los cuales la empresa trabaja.
                    </p>
                    <p>
                        El plazo máximo para agendar solicitudes de retiro de
                        tiendas es el día anterior de las entregas de
                        encomiendas con un plazo máximo de las 00:00 hrs.
                    </p>
                    <p>
                        Posterior al plazo máximo de solicitud (00:00 horas) no
                        se podrá seguir agendando encomiendas para el día
                        siguiente.
                    </p>
                    <p>
                        Los plazos de retiro en tiendas de tus encomiendas se
                        realizan al día siguiente de la solicitud de retiro de
                        tus encomiendas entre las 06:00 am hasta las 12:00pm del
                        mismo día.
                    </p>
                    <p>
                        Los plazos de entrega de las encomiendas son como máximo
                        de 12 horas o con un horario tope de las 22:00 horas del
                        mismo día.
                    </p>
                    <p>
                        Es totalmente responsabilidad de la tienda estar atentos
                        al horario establecido para el retiro de las
                        encomiendas.
                    </p>
                    <p>
                        Nuestros choferes esperan un plazo máximo de 10 minutos
                        para la recepción o retiro de las encomiendas en tiendas
                        o domicilios.
                    </p>
                    <p>
                        En el caso de no responder a llamados al domicilio o
                        llamados telefónicos a la tienda para la recepción de
                        los productos, se cobrará un recargo adicional de $2.990
                        pesos para reagendar retiro de las encomiendas al día
                        siguiente.
                    </p>
                    <p>
                        En el caso de que la cantidad de bultos entregados por
                        la tienda sea mayor a la cantidad agendada, estos se
                        realizarán al día siguiente.
                    </p>
                    <p>
                        En el caso de que la cantidad de bultos entregados por
                        la tienda sea menor a los agendados, no se realizara la
                        devolución monetaria de los bultos restantes.
                    </p>
                    <p>
                        En el caso de no informar en los bultos los datos
                        necesarios para la realización de las entregas la tienda
                        deberá cancelar nuevamente el despacho y se realizará al
                        día siguiente.
                    </p>
                    <p>
                        En el caso de detallar una información errónea del
                        destinatario como, nombre, dirección, comuna o número de
                        teléfono esto es responsabilidad de la tienda y debe ser
                        cancelado nuevamente.
                    </p>
                    <p>
                        En el caso de detallar una dirección errónea y la
                        encomienda es entregada en esta, es responsabilidad de
                        la tienda y no de la empresa.
                    </p>
                    <p>
                        Las encomiendas por obligación deben llevar los
                        siguientes datos: Nombre del destinatario, dirección del
                        destinatario, comuna del destinatario y número de
                        teléfono del destinatario.
                    </p>
                    <p>
                        En el caso de agregar una información adicional del
                        destinatario esta debe ser informada con anterioridad a
                        la empresa mediante vía WhatsApp con su ejecutivo.
                    </p>
                    <p>
                        En el caso de que en el domicilio de destino no se
                        encuentren receptores de la encomienda se efectuarán
                        máximo 3 llamados al número de teléfono detallado en el
                        bulto para avisar que la encomienda llegó a destino.
                    </p>
                    <p>
                        En el caso de no existir receptor de la encomienda en el
                        domicilio ni responder a los llamados telefónico de la
                        empresa, el despacho quedará nulo o debe ser nuevamente
                        cancelado para su entrega al día posterior.
                    </p>
                    <p>
                        Si el cliente o la tienda autoriza para colocar el
                        paquete en el antejardín del domicilio es sumamente
                        responsabilidad de ambos si el producto no se encuentra
                        al momento de la llegada del destinatario, sea este por
                        robo, hurto o desaparición de la encomienda. (La empresa
                        NO se hace responsable).
                    </p>
                    <p>
                        Si el cliente o la tienda que remite el producto
                        autoriza a la recepción de la encomienda a terceros
                        (Amigo, vecino, etc.) es responsabilidad del
                        destinatario si su encomienda es extraviada. (La empresa
                        NO se hace responsable).
                    </p>
                    <p>
                        Nuestros choferes esperan un plazo máximo de 10 minutos
                        para la entrega de la encomienda a su destinatario, en
                        caso de no haber respuestas esta tiene que ser cancelada
                        nuevamente para ser entregada al día siguiente.
                    </p>
                    <p>
                        Por protocolos de la empresa nuestros repartidores no
                        están autorizados a despachar productos dentro de
                        edificios, departamentos u oficinas. Es obligación del
                        destinatario bajar a recibir la encomienda o avisar para
                        dejarlos en conserjería.
                    </p>
                    <p>
                        Por protocolo de la empresa si el perímetro del destino
                        se encuentra deshabilitada para el paso vehicular ya sea
                        por ferias libre u otro tipo de evento es sumamente
                        responsabilidad del destinatario agendar un punto de
                        reencuentro para realizar la entrega de la encomienda.
                    </p>
                    <p>
                        Por protocolos de la empresa nuestros choferes no pueden
                        dejar el vehículo sin ocupante mientras este esté
                        cargado con encomiendas.
                    </p>
                    <p>
                        Todos nuestros Repartidores cuentan con vehículos
                        monitoreados por GPS durante el horario de trabajo para
                        la seguridad de las encomiendas de nuestros clientes.
                    </p>
                    <p>
                        En caso de robo, hurto o perdida de las encomiendas se
                        le reembolsara al cliente como máximo 5 veces el valor
                        del despacho.
                    </p>
                    <p>
                        En caso de deterioro de alguna encomienda se le
                        reembolsara al cliente como máximo 3 veces el costo del
                        despacho. (Queda exento las encomiendas como:
                        Chocolates, congelados, globos, productos de yeso,
                        productos de vidrio o algún otro material delicado de
                        transporte).
                    </p>
                    <p>
                        En caso de deterioro de un packaging la empresa se hace
                        cargo en términos monetarios de la devolución del 100%
                        del costo del despacho.
                    </p>
                    <p>
                        No realizamos despachos con horarios determinados de
                        entregas, estos pueden llegar entre los horarios
                        mencionados anteriormente.
                    </p>
                    <p>
                        La cobertura total de nuestros servicios abarcan las
                        siguientes comunas de Santiago: Cerrillos, Cerro Navia,
                        Conchalí, El Bosque, Estación Central, Huechuraba,
                        Independencia, La Cisterna, La Florida, La Granja, La
                        Pintana, La Reina, Las Condes, Lo Barnechea, Lo Espejo,
                        Lo Prado, Macul, Maipú, Ñuñoa, Pedro Aguirre Cerda,
                        Peñalolén, Providencia, Pudahuel, Quilicura, Quinta
                        Normal, Recoleta, Renca, San Joaquín, San Miguel, San
                        Ramón, Santiago, Vitacura, Puente Alto, San Bernardo,
                        Lampa.
                    </p>
                    <p>
                        Las condiciones de tarifa fija de $2.990 pesos son con
                        un volumen máximo de 40x40x40 (despachos mayores a este
                        volumen se cotizan de manera independiente).
                    </p>
                    <p>
                        Las condiciones de tarifa fija de $2.990 pesos son con
                        un peso máximo de 5 kilos. (despachos mayores a este
                        peso se cotizan de manera independiente).
                    </p>
                    <p>No contamos con mínimo de envíos.</p>
                    <p>
                        En el caso de agendar menos de 3 despachos se cobra un
                        monto adicional de $2.500 pesos por retiro de las
                        encomiendas.
                    </p>
                    <p>
                        En el caso de agendar sobre 3 despachos el valor del
                        retiro de las encomiendas son totalmente costeados por
                        la empresa y gratuito para nuestros clientes.
                    </p>
                    <p>
                        En el caso de un cambio de producto debe ser avisado
                        mediante el proceso de solicitud de retiro el día
                        anterior a la realización de los despachos en el área de
                        observaciones.
                    </p>
                    <p>
                        En el caso de una devolución de producto debe ser
                        avisado mediante el proceso de solicitud de retiro el
                        día anterior a la realización de los despachos en el
                        área de observaciones.
                    </p>
                    <p>
                        No transportamos tortas, desayunos, tablas de
                        aperitivos, mascotas, dinero en efectivo, plantas, etc.
                    </p>
                    <p>
                        Mediante la aceptación de los términos y condiciones de
                        los servicios realizados por la empresa declaro no
                        enviar artículos como armas, drogas, animales, artículos
                        de pirotecnia, ni ningún tipo de elementos que este
                        prohibida su comercialización en Chile.
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className="rounded-3xl bg-main-color px-4"
                    onClick={() => props.setOpenModal(undefined)}
                >
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalTermsService;
