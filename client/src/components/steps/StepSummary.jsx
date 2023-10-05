import { useContext, useEffect } from "react";
import { Checkbox, Label } from "flowbite-react";
import { FormWizardContext } from "../../context/FormWizardProvider";

import SummaryDetails from "../SummaryDetails";

import { summary } from "../../utilities/summary";

const StepSummary = (props) => {
    const {
        setHeight,
        formatPrice,
        pickupPrice,
        totalPrice,
        setTotalPrice,
        agreeTerms,
        setAgreeTerms,
        arrayOrders,
        propsModal,
    } = useContext(FormWizardContext);

    const { fieldsSender, fieldsRecipient, fieldsPackage, fieldsPayment } =
        summary();

    const pricesArray = [];

    const calculateTotal = (prices) => {
        if (prices.length >= 3) {
            return prices.reduce((a, b) => a + b, 0);
        }

        return prices.reduce((a, b) => a + b, 0) + pickupPrice;
    };

    arrayOrders.map((order) => {
        let priceOrder = order.fieldsPayment.slice(-1);
        priceOrder.map((price) => {
            let priceInteger = parseInt(price.value.replace(/[$.]/g, ""));
            pricesArray.push(priceInteger);
        });
    });

    // The latest price is added to the array
    pricesArray.push(props.getValues("shippingPrice"));
    const totalOrders = pricesArray.length;

    useEffect(() => {
        setHeight(props.tabContainerShipping.current.clientHeight);
        setTotalPrice(calculateTotal(pricesArray));
    }, [totalPrice]);

    return (
        <>
            <div className="mb-3 rounded-md bg-secondary-color p-2 text-center text-white">
                Total de envíos: {totalOrders}
            </div>
            {totalOrders > 0 &&
                arrayOrders.map((order, index) => (
                    <div
                        className="mb-5 rounded-xl border-4 border-main-color p-5"
                        key={index}
                    >
                        <h3 className="mb-2 text-left text-xl">
                            Resumen del envío{" "}
                            <span className="text-main-color">
                                #{index + 1}:
                            </span>
                        </h3>

                        <SummaryDetails
                            title="Información del remitente"
                            fields={order.fieldsSender}
                        />

                        <SummaryDetails
                            title="Información del destinatario"
                            fields={order.fieldsRecipient}
                        />

                        <SummaryDetails
                            title="Información del paquete"
                            fields={order.fieldsPackage}
                        />

                        <SummaryDetails
                            title="Información del pago"
                            fields={order.fieldsPayment}
                        />
                    </div>
                ))}

            <div className="mb-5 rounded-xl border-4 border-main-color p-5">
                <h3 className="mb-2 text-left text-xl">
                    Resumen del envío{" "}
                    <span className="text-main-color">#{totalOrders}:</span>
                </h3>

                <SummaryDetails
                    title="Información del remitente"
                    fields={fieldsSender(props.getValues)}
                />

                <SummaryDetails
                    title="Información del destinatario"
                    fields={fieldsRecipient(props.getValues)}
                />

                <SummaryDetails
                    title="Información del paquete"
                    fields={fieldsPackage(props.getValues)}
                />

                <SummaryDetails
                    title="Información del pago"
                    fields={fieldsPayment(props.getValues, formatPrice)}
                />
            </div>

            {totalOrders < 3 && (
                <div className="xl:text-lg">
                    <span className="mr-1 text-title-color">
                        Valor del retiro:
                    </span>{" "}
                    ${formatPrice(pickupPrice)}
                </div>
            )}

            <div className="mt-5 border-b-4 border-t-4 border-secondary-color py-2 text-right text-lg text-secondary-color xl:text-xl">
                Total a pagar: ${formatPrice(totalPrice)}
            </div>

            {props.getValues("paymentMethod") === "Transferencia" && (
                <>
                    <h4 className="mb-1 text-lg text-secondary-color">
                        Datos de la cuenta
                    </h4>
                    <ul className="text-sm [&>li:last-child]:mb-0 [&>li]:mb-1">
                        <li className="uppercase">
                            Sociedad de inversiones jm spa
                        </li>
                        <li>RUT: 77.289.443-0</li>
                        <li className="uppercase">
                            Cuenta corriente Banco Itau
                        </li>
                        <li>Número: 0221341785</li>
                        <li>Email: pagos@intercourier.cl</li>
                    </ul>
                </>
            )}

            <div className="mt-4 flex items-center gap-2">
                <Checkbox
                    id="agree"
                    className="checked:bg-main-color focus:ring-main-color"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                />
                <Label className="flex" htmlFor="agree">
                    He leído y acepto los
                    <a
                        className="ml-1 cursor-pointer text-secondary-color hover:underline"
                        onClick={() =>
                            propsModal.setOpenModal("termsConditions")
                        }
                    >
                        Términos y Condiciones
                    </a>
                </Label>
            </div>
        </>
    );
};

export default StepSummary;
