import { useContext } from "react";
import { Modal } from "flowbite-react";
import { FormWizardContext } from "../../context/FormWizardProvider";

const ModalTermsService = () => {
    const { propsModal } = useContext(FormWizardContext);

    return (
        <Modal
            show={propsModal.openModal === "termsConditions"}
            onClose={() => propsModal.setOpenModal(undefined)}
        >
            <Modal.Header>Términos y Condiciones</Modal.Header>
            <Modal.Body>
                <ol
                    id="terms-conditions"
                    className="space-y-3 text-gray-500 [&>li]:leading-tight"
                >
                    <li>
                        Retiramos encargo en la dirección indicada. El plazo de
                        entrega está definido según comuna y modalidad
                        contratada.
                    </li>
                    <li>
                        No aceptamos envios por pagar, todos los envíos deben
                        ser anteriormente cancelados por nuestros clientes
                        directos.
                    </li>
                    <li>
                        Es responsabilidad de la tienda estar atentos al horario
                        establecido para el retiro de las encomiendas.
                    </li>
                    <li>
                        No transportamos tortas, desayunos, tablas de
                        aperitivos, mascotas, dinero en efectivo, plantas, etc.
                    </li>
                    <li>No contamos con mínimo de envíos.</li>
                    <li>
                        En caso de deterioro de alguna encomienda se le
                        reembolsara al cliente como máximo 3 veces el costo del
                        despacho.
                    </li>
                    <li>
                        Por protocolos de la empresa nuestros repartidores no
                        están autorizados a despachar productos dentro de
                        edificios, departamentos u oficinas. Es obligación del
                        destinatario bajar a recibir la encomienda o avisar para
                        dejarlos en consejería.
                    </li>
                    <li>
                        Si el cliente o tienda que remite el producto autoriza a
                        la recepción de la encomienda a terceros (amigo, vecino,
                        etc), es responsabilidad del destinatario.
                    </li>
                    <li>
                        En el caso de no responder a llamados al domicilio o
                        llamados telefónicos a la tienda para la recepción de
                        los productos, se cobrará un recargo adicional de $2.900
                        pesos para reagendar el retiro de las encomiendas al día
                        siguiente.
                    </li>
                    <li>
                        Las encomiendas por obligación deben llevar los
                        siguientes datos: Nombre del destinatario, dirección del
                        destinatario, comuna del destinatario y número de
                        teléfono del destinatario.
                    </li>
                    <li>
                        En el caso de detallar una dirección errónea y la
                        encomienda es wntregada en esta, es responsabilidad del
                        cliente y no de la empresa.
                    </li>
                    <li>
                        En el caso de no informar en los bultos los datos
                        necesarios para la realización de las entregas, la
                        tienda deberá cancelar nuevamente el despacho y se
                        realizará al día siguiente.
                    </li>
                    <li>
                        En el caso de que en el domicilio de destino no se
                        encuentren receptores de la encomienda se efectuarán
                        máximo 3 llamados al número de teléfono detallado en el
                        bulto para avisar que la encomienda llego a destino.
                    </li>
                    <li>
                        En el caso de no existir receptor de la encomienda en el
                        domicilio, ni responder a los llamados telefónicos de la
                        empresa, el despacho quedará nulo o debe ser nuevamente
                        cancelado para su entrega al día posterior.
                    </li>
                    <li>
                        Los pagos se hacen vía transferencia, Flow o tarjetas al
                        momento de recepcionar, no recibimos efectivo por parte
                        de los repartidores.
                    </li>
                    <li>
                        Los bultos deben ir con los datos de quién recibe
                        (nombre, dirección, teléfono).
                    </li>
                    <li>
                        A cada cliente se le envía un SMS cuando el pedido sale
                        a ruta con un código para que pueda realizar el
                        seguimiento y llegada del pedido.
                    </li>
                    <li>
                        Por protocolos de la empresa, nuestros choferes no
                        pueden dejar el vehículo sin ocupante mientras esté
                        cargado con encomiendas.
                    </li>
                    <li>
                        Mediante la aceptación de los términos y condiciones de
                        los servicios realizados por la empresa, declaro no
                        enviar artículos como armas, drogas, animales, artículos
                        de pirotecnia, ni ningún tipo de elementos que este
                        prohibida su comercialización en Chile.
                    </li>
                </ol>
            </Modal.Body>
            <Modal.Footer className="justify-center">
                <button
                    type="button"
                    className="rounded-3xl bg-main-color px-6 py-2 text-white transition-all duration-200 ease-in-out hover:bg-secondary-color"
                    onClick={() => propsModal.setOpenModal(undefined)}
                >
                    Cerrar
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalTermsService;
